var frageDate=[
  "asdvninvdk",
  "acnicdkcmds",
  "acdvf",
  "asvfbfbf",
  "avgbgscdxsxsxs",
  "anhcdcdfrbf",
  "anhyfvfcd",
  "bxnsinxsmxs",
  "bmximismxmsk",
  "cmximxidmcndc",
  "cmcksmcksmxksmxks",
]


/*获取的页面上的选择器*/
var $input=$("input"),  //input
    $alt=$(".alt")  //ul
  


/*通过关键字获取数据*/
function search(keyword,fn){
  setTimeout(function(){
     var result=[]
     for(var i=0;i<frageDate.length;i++){
        if(frageDate[i].indexOf(keyword)>=0){
        result.push(frageDate[i])
      }  
     }
     fn(result)
    
  },200)
}


/* 把获取的数据渲染到页面上*/
function sethtml(array){
  var html=""
  for(var i=0;i<array.length;i++){
    html+="<li class=''>"+array[i]+"</li>"
  }
  $alt[0].innerHTML=''
  $alt.html(html)
  $li=$(".alt>li")

  setdefault(array[0])
}


/*input事件触发数据请求功能*/
function suggestion(){
  var timeId
  $input.on("input",function(){
     var inputs=this

    /*如果上次的计时还在 则需要清除  不然时间到了依然会去跑腿 即输入一个字母 时间到就去跑腿一次  下一个时间到再同样跑腿一次*/
  /*这就是函数节流*/
     if (timeId) {
       clearTimeout(timeId)
     }

     /*用户输入后开始计时  1秒后再触发search函数*/
     timeId=setTimeout(function(){
          var keyword=inputs.value
          if(keyword){
            search(keyword,sethtml)
          }else{
            $alt[0].innerHTML=''
            index=0
          }
      },300)
    })
}

/*执行端口函数*/
suggestion()


var $li

/*交互*/
/*1，Input框 placeholder 默认显示搜索到的第一个数据*/

function setdefault(values){

   var index=-1

  $input.on("keydown",function(e){
   

    if (e.which==39||e.which==13) {
      $input.val(values)
      $alt[0].innerHTML=''
    }else if(e.which==40){
          if(index==$li.length||index==-1){
             index=0
          }
          $li.eq(index).addClass("light").siblings().removeClass("light")  
          $input.val($li.eq(index).text())
          index++

      }else if(e.which==38){
            if(index==-1){
                 index=$li.length-1
            }
            $li.eq(index).addClass("light").siblings().removeClass("light")
            $input.val($li.eq(index).text())
            index--
      }
  })
}

/*2,点击li  使文字复制到input*/

$alt.on('click','li',function(){
  $input.val($(this).text())  
  $alt[0].innerHTML=''
  index=0
})

/*3,用户点击外面   清空ul*/
$("body").on("click",function(e){
  $alt[0].innerHTML=''
  index=0
})














