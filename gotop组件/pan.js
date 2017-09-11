function GoTop(obj){
     this.ct=obj.ct
     this.text=obj.text
     this.createNode()
     this.bindEvent()
}
GoTop.prototype.bindEvent=function(){
	this.target.on('click',function(){
		$(window).scrollTop(0)
	})
}
GoTop.prototype.createNode=function(){
    this.target=$('<div class="gotop">'+this.text+'</div>')
	this.ct.append(this.target)
}

var obj1={
	ct:$('body'),
	text:'go to top'
}

var gotop=new GoTop(obj1)
