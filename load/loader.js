/**
 * Created by Administrator on 2017/9/15 0015.
 */
function slideDownStep1(dist) {
    var sd1 = document.getElementById("sd1"),
        sd2 = document.getElementById("sd2");
    sd2.style.display = "none";
    sd1.style.display = "block";
    sd1.style.height = 1 - parseInt(dist) + "px";
}
function slideDownStep2() {
    var sd1 = document.getElementById("sd1"),
        sd2 = document.getElementById("sd2");
    sd1.style.display = "none";
    sd1.style.height = "20px";
    sd2.style.display = "block";
}
function slideDownStep3() {
    var sd1 = document.getElementById("sd1"),
        sd2 = document.getElementById("sd2");
    sd1.style.display = "none";
    sd2.style.display = "none";
}

function kt_touch(contentId, way) {
    var _start = 0,
        _end = 0,
        _content = document.getElementById(contentId);
    _content.addEventListener("touchstart", touchStart, false);
    _content.addEventListener("touchmove", touchMove, false);
    _content.addEventListener("touchend", touchEnd, false);
    function touchStart(event) {
        event.preventDefault();
        if (!event.touches.length) return;
        var touch = event.touches[0];
        if (way == "x") {
            _start = touch.pageX;
        } else {
            _start = touch.pageY;
        }
    }

    function touchMove(event) {
        event.preventDefault();
        if (!event.touches.length) return;
        var touch = event.touches[0];

        if (way == "x") {
            _end = (_start - touch.pageX);
        } else {
            _end = (_start - touch.pageY);
            if (_end < 0) {
                slideDownStep1(_end);
            }
        }
    }

    function touchEnd(event) {
        if (_end > 0) {
            //左滑或上滑
            slideDownStep2();
            slideDownStep3();
            getReplyList(++curPage);
        }else{
            slideDownStep2();
            slideDownStep3();
            getReplyList();
        } //右滑下滑
    }
}
kt_touch('sd','y');