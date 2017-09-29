var b=document.getElementById("btn")
b.onclick = function(){
    var xhr = new XMLHttpRequest()
    xhr.open("post", "/responseText")
    xhr.onload = function(){
        var jsret=JSON.parse(arguments[0].target.response),
            ret=jsret.split('，'),
            /*获取弹窗相关DOM `元素*/
            dialog1=$('.dialog1'),
            $input=$('.inputtext'),
            cancel=$('.cancel'),
            sure=$('.sure')


        dialog1[0].style.display="inline-block"
        /*检测input的输入*/
        $input.on('keydown input',function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A, Command+A
                (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: home, end, left, right, down, up
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }

            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
            this.value=this.value.replace(/[\u4e00-\u9fa5\d]/g,'')
        })

        $input.bind("paste",function(e) {
            e.preventDefault();
        })

        /*第一个弹窗里点击取消*/
        cancel[0].onclick=function(){
            dialog1[0].style.display="none"
        }

        /*第一个弹窗点击确定*/
        sure[0].onclick=function(){
            var dialog2=$('.dialog2'),
                content=$('.content'),
                close=$('.close')

            dialog1[0].style.display="none"
            dialog2[0].style.display="inline-block"


            input.bind("paste",function(e) {
                e.preventDefault();
            })
            /*获取用户输入并把值给第二个弹窗*/
            inputValue=input[0].value
            if(!inputValue){
                content[0].innerText='亲爱的'+ret[0]+'顾客，您没有出价'
            }else{
                content[0].innerText='亲爱的'+ret[0]+'顾客，您的出价是'+inputValue+'元'
            }

            /*清空input值*/
            input[0].value=null

            close[0].onclick=function(){
                dialog2[0].style.display="none"
            }
        }

    }
    xhr.send()
}
