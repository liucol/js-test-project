   $(function() {
       var $ct = $('.wrap'), //轮播最外包裹层
           $imgul = $('.image-container', $ct), //包裹图片的ul
           $imgli = $('li', $imgul), //包裹图片的li
           $img = $('img', $imgli), //图片
           $prev = $('.prev', $ct), //前一个按钮箭头
           $next = $('.next', $ct), //头一个按钮箭头
           $bubbleli = $('.bubble>li', $ct), //所有的指示泡泡
           imgwidth = $img.width(), //一张图片宽度
           imgcount = $imgli.length, //图片的个数
           pageindex = 0, //窗口显示的第几张图片
           timeid //setTimeout编号


       $imgul.append($imgli.first().clone()) //克隆第一张图片放到图片容器的最后
       $imgul.prepend($imgli.last().clone()) //克隆最后一张图片放在图片容器的首位

       $imgul.width((imgcount + 2) * imgwidth) //设置图片容器的宽度  加2是加上新添加的li的个数  imgcount是添加前的个数
       $imgul.css({ left: -imgwidth }) //在添加完新li后设置图片容器的位置

       autoplay() //调用自动播放函数

       //前一个按钮箭头 绑定点击事件
       $prev.click(function() {
           if ("$imgul:not(:animated)") {
               //首先清除自动播放
               clearTimeout(timeid)
               //调用滚动到下一张
               playprev()
               timeid = setTimeout(autoplay, 0)
           }
       })
       //后一个按钮箭头 绑定点击事件
       $next.click(function() {
           if ("$imgul:not(:animated)") {
               clearTimeout(timeid)
               playnext()
               timeid = setTimeout(autoplay, 0)
           }

       })

       //点击泡泡li
       $bubbleli.click(function(e) {
           clearTimeout(timeid) //清除自动播放
           var index = $(e.target).index() //点击的泡泡li的序号
           if (pageindex < index + 1) { //点击的泡泡li的序号大于当前显示图片的序号
               pageindex = index + 1
               playprev() //图片ul包裹层向右移动
           } else {
               pageindex = index - 1
               playnext() //图片ul包裹层向左移动
           }
           timeid = setTimeout(autoplay, 0)
       })

       //切换到上一张图片
       function playprev() {
           //图片包裹层添加动画$imgul.animate({动画},完成动画后的回调函数)
           $imgul.animate({
               left: -imgwidth * pageindex //设置图片容器的位置
           }, function() {
               pageindex--
               if (pageindex == -1) { //现在显示的是最后一张图片的影子
                   $imgul.css({ left: -imgwidth * imgcount }) //设置图片容器位置 显示正真的最后一张图片
                   pageindex = imgcount - 1 //设置正确的pageindex的值
               }
               activebubble() //调用设置指示泡泡函数
           })
       }

       function playnext() {
           $imgul.animate({
               left: -imgwidth * (pageindex + 2)
           }, function() {
               pageindex++
               if (pageindex == imgcount) {
                   $imgul.css({ left: -imgwidth })
                   pageindex = 0
               }
               activebubble()
           })
       }

       //设置指示泡泡的样式
       function activebubble() {
           $bubbleli.removeClass('active').eq(pageindex).addClass('active')
       }

       //设置自动播放
       function autoplay() {
           timeid = setTimeout(function() {
               playnext()
               autoplay()
           }, 3000)
       }
   })