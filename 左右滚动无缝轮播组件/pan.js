var slide = (function() {
    function _slide(ct) {
        //包裹层
        this.ct = ct
        //准备选择器
        this.init()
        //准备工作  添加前后两个影子 设置包裹层宽度和初始位置
        this.render()

        //自动播放
        this.autoplay()

        //绑定左按钮箭头单击事件
        this.bindprev()
        //绑定右按钮箭头单击事件
        this.bindnext()

        //绑定指示泡泡的单击事件
        this.bindbubble()

        //指示泡泡的样式 
        this.activebubble()
    }



    _slide.prototype.init = function() {
        var $imgul = this.imgul = $('.image-container', this.ct), //包裹图片的ul
            $imgli = this.imgli = $('li', $imgul), //包裹图片的li
            $img = this.img = $('img', $imgli), //图片
            $prev = this.prev = $('.prev', this.ct), //前一个按钮箭头
            $next = this.next = $('.next', this.ct), //头一个按钮箭头
            $bubbleli = this.bubbleli = $('.bubble>li', this.ct) //所有的指示泡泡

        this.imgwidth = $img.width() //一张图片宽度
        this.imgcount = $imgli.length //图片的个数
        this.pageindex = 0 //窗口显示的第几张图片
        this.timeid //setTimeout编号
    }

    _slide.prototype.render = function() {
        this.imgul.append(this.imgli.first().clone()) //克隆第一张图片放到图片容器的最后
        this.imgul.prepend(this.imgli.last().clone()) //克隆最后一张图片放在图片容器的首位

        this.imgul.width((this.imgcount + 2) * this.imgwidth) //设置图片容器的宽度  加2是加上新添加的li的个数  imgcount是添加前的个数
        this.imgul.css({ left: -this.imgwidth }) //在添加完新li后设置图片容器的位置
    }


    _slide.prototype.bindprev = function() {
        var _this = this
        //前一个按钮箭头 绑定点击事件
        this.prev.click(function() {
            if (_this.imgul + ":not(:animated)") {
                //首先清除自动播放
                clearTimeout(_this.timeid)
                _this.playprev()
                _this.timeid = setTimeout(function() {
                    _this.autoplay()
                }, 0)
            }
        })
    }


    //图片包裹层右移动
    _slide.prototype.playprev = function() {
        var _this = this
        //调用滚动到下一张
        //图片包裹层添加动画$imgul.animate({动画},完成动画后的回调函数)
        _this.imgul.animate({
            left: -_this.imgwidth * _this.pageindex //设置图片容器的位置
        }, function() {
            _this.pageindex--
                if (_this.pageindex == -1) { //现在显示的是最后一张图片的影子
                    _this.imgul.css({ left: -_this.imgwidth * _this.imgcount }) //设置图片容器位置 显示正真的最后一张图片
                    _this.pageindex = _this.imgcount - 1 //设置正确的pageindex的值
                }
            _this.activebubble() //调用设置指示泡泡函数
        })
    }


    _slide.prototype.bindnext = function() {
        var _this = this
        //后一个按钮箭头 绑定点击事件
        this.next.click(function() {
            if (_this.imgul + ":not(:animated)") {
                clearTimeout(_this.timeid)
                _this.playnext()
                _this.timeid = setTimeout(function() {
                    _this.autoplay()
                }, 0)
            }
        })
    }
    //图片包裹层左移动
    _slide.prototype.playnext = function() {
        var _this = this
        this.imgul.animate({
            left: -_this.imgwidth * (_this.pageindex + 2)
        }, function() {
            _this.pageindex++
                if (_this.pageindex == _this.imgcount) {
                    _this.imgul.css({ left: -_this.imgwidth })
                    _this.pageindex = 0
                }
            _this.activebubble()
        })
    }


    _slide.prototype.autoplay = function() {
        var _this = this
        _this.playnext()
        this.timeid = setTimeout(function() {
            //递归
            _this.autoplay()
        }, 3000)
    }


    _slide.prototype.activebubble = function() {
        var _this = this
        this.bubbleli.removeClass('active').eq(_this.pageindex).addClass('active')
    }
    _slide.prototype.bindbubble = function() {
        var _this = this
        //点击泡泡li
        this.bubbleli.click(function(e) {
            if (_this.imgul + ":not(:animated)") {
                clearTimeout(_this.timeid) //清除自动播放
                var index = $(e.target).index() //点击的泡泡li的序号
                if (_this.pageindex < index + 1) { //点击的泡泡li的序号大于当前显示图片的序号
                    _this.pageindex = index + 1
                    _this.playprev() //图片ul包裹层向右移动
                } else {
                    _this.pageindex = index - 1
                    _this.playnext() //图片ul包裹层向左移动
                }
                _this.timeid = setTimeout(function() {
                    _this.autoplay()
                }, 2000)
            }
        })

    }
    //new一个轮播组件实例  并传入轮播包裹层就可以实现了   轮播DOM树结构要和index.html页面的结构一致 class类名可根据需要修改js选择器  
    /*
     **实现的功能：
     *      1）自动动画轮播
     *      2）单击左右按钮箭头显示下一张
     *      3）单击指示泡泡显示对应轮播图片
     *      4）结构上：适应性添加指示泡泡和图片的个数
     */
    /*
     ***封装
     */
    return {
        init: function($ct) {
            new _slide($ct)
        }
    }
})()

slide.init($('.wrap'))