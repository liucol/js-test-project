var $button = $('.button'),  //按钮
    $ul=$('.wrap'),   //列表包裹层
    state=false,    //锁
    index = 0   //数字
$button.on('click', function(e) {  //点击按钮
	if(state){   //若state为true  说明ajax正在发送
		return null   //阻止ajax发送请求
	}
	state=true   
	$button.text('正在加载...')  //修改按钮状态文字
    $.ajax({   //jquery ajax
        url: "/loadMore",  //地址
        type:"get",   //发送方式
        data:{indexdata:index},  //发送给后端的数据
        dataType:"json"   //说明接受到后端数据的格式为json
    }).done(function(data) {  //接收后端数据成功
    	index++   //index 加1
        render(data)   //传入后端数据调用render函数
        $button.text('点我')   //恢复按钮状态文字
        state=false    //恢复锁的状态
    })
})

function render(data){
    var $li=$('<li>'+data+'</li>')
    $ul.append($li)
}