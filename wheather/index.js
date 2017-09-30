/**
 * Created by Administrator on 2017/9/30 0030.
 */
var  $btn=$(".btn")
$btn.on('click',function(){
    $.ajax({   //jquery ajax
        url: "https://weixin.jirengu.com/weather/cityid?location=beijing",  //地址
        type:"get",   //发送方式
        dataType:"json"   //说明接受到后端数据的格式为json
    }).done(function(ret) {  //接收后端数据成功
        console.log(ret)
    })
})