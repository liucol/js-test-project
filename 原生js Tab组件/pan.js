function creatTab(ct) {
    this.ct = ct    //获取tab容器
    this.init(this.ct) //保存属性方法
    this.bind()   //事件方法
}

creatTab.prototype.init = function(ctElement) {
    this.tabHead = ctElement.querySelectorAll('ul')[0]    //头ul
    this.tabHeadLiList = this.tabHead.querySelectorAll('li')  //头li
    this.tabPanner = ctElement.querySelectorAll('ul')[1]    //内容ul
    this.tabPannerLiList = this.tabPanner.querySelectorAll('li')  //内容li
}
creatTab.prototype.bind = function() {
    var _this = this
    this.tabHead.onclick = function(e) {   //事件委托的方式绑定头li点击事件
        var target = e.target,      //当前点击的头li
            index = [].indexOf.call(_this.tabHeadLiList, target)

        _this.tabHeadLiList.forEach(function(lis) {    //删除所有头li的active class类名
            lis.classList.remove('active')   
        })
        _this.tabHeadLiList[index].classList.add('active')   //给当前点击的头li  添加active类名

        _this.tabPannerLiList.forEach(function(lis) {   //删除所以内容li的active class类名
            lis.classList.remove('active')
        })
        _this.tabPannerLiList[index].classList.add('active')  //给当前对应的内容li 添加active类名
    }
}

var tab1 = new creatTab(document.querySelector('.tabwrap1'))
var tab2 = new creatTab(document.querySelector('.tabwrap2'))
var tab3 = new creatTab(document.querySelector('.tabwrap3'))