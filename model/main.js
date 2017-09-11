var $wrap = $('.wrap')

function bindclick(obj) {
    this.init(obj)
    this.click(obj)
}
bindclick.prototype.init = function(obj) {
    this.$clickElement = obj.$clickElement
    this.backfn = obj.backfn
}
bindclick.prototype.click = function(obj) {
    var _this = this
    this.$clickElement.on('click', function(e) {

        e.stopPropagation()
        _this.backfn()

        _this.$model = $(obj.$model)
        _this.$span = $(obj.$span)
        _this.$cancelbtn = $(obj.$cancelbtn)
        _this.$ensurebtn = $(obj.$ensurebtn)

        _this.removemodel(_this.$span)
        _this.removemodel(_this.$cancelbtn)
        _this.removemodel($('body'))
        _this.removemodel(_this.$ensurebtn)
    })
}
bindclick.prototype.removemodel = function($bindnode) {
    var _this = this
    $bindnode.on('click', function(e) {
        _this.$model.remove()
    })
}


//打开1
/*$('.button1').on('click', function(e) {
    e.stopPropagation()
    render1()
    var $span = $('.model1 span'),
        $model = $('.model1'),
        $cancelbtn = $('.cancelbtn')
    removemodel($span, $model)
    removemodel($cancelbtn, $model)
    removemodel($('body'), $model)
})*/

function render1() {
    var $dom = $(`
         <div class="model model1 clearfix">
              <span>×</span>
              <p>hello</p>
              <div class="cancelbtn">取消</div>
         </div>
      `)
    $wrap.append($dom)
}
var obj1 = {
    backfn: render1,
    $clickElement: $('.button1'),
    $model: '.model1',
    $span: '.model1 span',
    $cancelbtn: '.cancelbtn'
}
var btn1 = new bindclick(obj1)



//打开2
/*$('.button2').on('click', function(e) {
    e.stopPropagation()
    render2()
    var $span = $('.model2 span'),
        $model = $('.model2'),
        $cancelbtn = $('.cancelbtn'),
        $ensurebtn = $('.ensurebtn')

    removemodel($span, $model)
    removemodel($cancelbtn, $model)
    removemodel($('body'), $model)
    removemodel($ensurebtn, $model)
})*/

function render2() {
    var $dom = $(`
         <div class="model model2 clearfix">
              <div class="top">
                 <div class="title">Title</div>
                 <span>×</span>
              </div>
              <p>hello</p>
              <div class="cancelbtn">取消</div>
              <div class="ensurebtn">确定</div>
         </div>
      `)
    $wrap.append($dom)
}

var obj2 = {
    backfn: render2,
    $clickElement: $('.button2'),
    $model: '.model2',
    $span: '.model2 span',
    $cancelbtn: '.cancelbtn',
    $ensurebtn: '.ensurebtn'
}
var btn2 = new bindclick(obj2)

//打开3

/*$('.button3').on('click', function(e) {
    e.stopPropagation()
    render3()
    var $span = $('.model3 span'),
        $model = $('.model3'),
        $cancelbtn = $('.cancelbtn'),
        $ensurebtn = $('.ensurebtn')

    removemodel($span, $model)
    removemodel($cancelbtn, $model)
    removemodel($('body'), $model)
    removemodel($ensurebtn, $model)

})*/

function render3() {
    var $dom = $(`
         <div class="model model3 clearfix">
              <div class="top">
                 <div class="title">Title</div>
                 <span>×</span>
              </div>
               <ul>
                    <li>111111</li>
                    <li>222222</li>
                    <li>333333</li>
                 </ul>
              <div class="cancelbtn">取消</div>
              <div class="ensurebtn">确定</div>
         </div>
      `)
    $wrap.append($dom)
}

var obj3 = {
    backfn: render3,
    $clickElement: $('.button3'),
    $model: '.model3',
    $span: '.model3 span',
    $cancelbtn: '.cancelbtn',
    $ensurebtn: '.ensurebtn'
}
var but3 = new bindclick(obj3)


//打开4
/*$('.button4').on('click', function(e) {
    e.stopPropagation()
    render4()
    var $span = $('.model4 span'),
        $model = $('.model4')

    removemodel($span, $model)
    removemodel($('body'), $model)
})*/

function render4() {
    var $dom = $(`
         <div class="model model4 clearfix">
              <div class="top">
                 <div class="title">Title</div>
                 <span>×</span>
              </div>
              <p>hello</p>
         </div>
      `)
    $wrap.append($dom)
}
var obj4 = {
    backfn: render4,
    $clickElement: $('.button4'),
    $model: '.model4',
    $span: '.model4 span'
}
var but4 = new bindclick(obj4)