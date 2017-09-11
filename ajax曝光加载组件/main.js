var lazyLoad = (function() {

    function _exposure($node, index, callback) {
        this.$node = $node
        this.index = index
        this.callback = callback

        this.state = false //锁

        this.scrollfn() //监听执行滚动事件
    }

    _exposure.prototype.scrollfn = function() {
        var _this = this
        $(window).scroll(function() {
            var $scrollTop = $(window).scrollTop(),
                $windowHeight = $(window).height()

            $OffsetTop = _this.$node.offset().top
            if ($OffsetTop + 5 < $scrollTop + $windowHeight) {
                _this.getdata()
            }
        })
    }


    _exposure.prototype.getdata = function() { //获取数据
        var _this = this

        if (_this.state) { //若state为true  说明ajax正在发送
            return null //阻止ajax发送请求
        }
        _this.state = true
        $.ajax({ //jquery ajax
            url: "/loadMore", //地址
            type: "get", //发送方式
            data: { indexdata: _this.index }, //发送给后端的数据
            dataType: "json" //说明接受到后端数据的格式为json
        }).done(function(data) { //接收后端数据成功
            _this.index++ //index 加1
                _this.callback(data) //传入后端数据调用render函数
            _this.state = false //恢复锁的状态
        })
        _this.index++ 
        _this.callback(_this.index)
    }

/*
*$node:曝光触发元素
*index:叠加变量
*callback：回调函数
 */
    return {
        init: function($node, index, callback) {
            new _exposure($node, index, callback)
        }
    }
})()  //立即执行




var $button = $('.button'), //按钮
    $ul = $('.wrap'), //列表包裹层
    index = 21 //叠加变量从21开始

function render(data) { //回调函数
    var $li = $('<li>' + data + '</li>')
    $ul.append($li)
}

lazyLoad.init($button, index, render)