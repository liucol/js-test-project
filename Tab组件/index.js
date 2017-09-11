function tabfn(obj) {
    this.init(obj)
    this.bind()
}
/*把属性值封装在一个大的属性里面   这样这个大的属性init专门存放所有的属性值*/
tabfn.prototype.init = function(obj) {
    this.$head = $(obj.wrap + ' .head') //头部的ul
    this.$headli = $(obj.wrap + ' .head li') //头部的按钮 伪数组
    this.$containerli = $(obj.wrap + ' .container li') //内容区的li
}
/*bind是一个方法的名字*/
tabfn.prototype.bind = function() {
    /*保存this值*/
    var tabs = this
    /*按钮添加点击事件*/
    this.$head.on('click', 'li', function() {
        var liindex = $(this).index()
        tabs.$headli.eq(liindex).addClass('active').siblings().removeClass('active')
        tabs.$containerli.eq(liindex).addClass('active').siblings().removeClass('active')
    })
}

/*第一个tab*/
var obj1 = {
    wrap: '.wrap1'
}
var tabs1 = new tabfn(obj1)

/*第二个tab*/
var obj2 = {
    wrap: '.wrap2'
}
var tabs2 = new tabfn(obj2)