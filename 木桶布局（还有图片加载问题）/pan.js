//生成5组随机数
function random() {
    var width,
        array = []

    for (var i = 0; i < 5; i++) {

        width = Math.ceil(200 + Math.random() * 200)

        array.push(width)
    }

    return array
}

function enlargeimg(data) {

    var enlargevalue = (1000 * 100) / data - 100

    return enlargevalue
}

function narrowimg(data) {
    var narrowvalue = 100 - (1000 * 100) / data
    return narrowvalue
}
//生成DOM结构
//渲染DOM
function render() {
    var $wrap = $('.wrap'),
        $div = $('<div class="img-wrap"></div>'),
        array = random(), //图片的宽度数组
        img = [],
        summerwidth = 0

    for (var i = 0; i < array.length; i++) {
        $img = $(`<img src=https://unsplash.it/${array[i]}/100 />`)
        img.push($img)
        summerwidth += array[i];
        $div.append($img)
    }

    function changeimgwidth(xdata) {
        for (var i = 0; i < xdata.length; i++) {
            var width = xdata[i].attr('width')
            console.log(width)
            xdata[i].attr('width', width + xdata)
        }
    }

    if (summerwidth > 1000) {
        var xwidth = narrowimg(summerwidth)
        img[4].on('load',function(){
             changeimgwidth(img)
        })
       
    } else if (summerwidth < 1000) {
        enlargeimg(summerwidth)
    }

    $wrap.append($div)
}

render()