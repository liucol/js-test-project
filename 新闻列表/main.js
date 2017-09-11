$.ajax({
	url: 'http://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4',
	type: 'GET',
	dataType: 'json'
})
.done(function() {
	fnc(ret)
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});


function fnc(ret){
   console.log(ret.data[0])
}
