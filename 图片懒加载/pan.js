$(window).scroll(function() {
    var $scrollTop = $(window).scrollTop(),
        $windowHeight = $(window).height(),
        $imageAll =  $('img[data-src]')

    for(var i=0;i<$imageAll.length;i++){
    	$imageOffsetTop=$imageAll.eq(i).parent('.image-wrap').offset().top
    	console.log($imageOffsetTop)
    	if($imageOffsetTop+200<$scrollTop+$windowHeight){
             $imageAll.eq(i).attr('src',$imageAll.eq(i).attr('data-src')) 
    	}
    }
})