function Barrel($ct) {
    this.$ct = $ct
    this.rowlist = []
    this.loadImg()
}

Barrel.prototype = {
    loadImg: function() {
        var _this = this
        var imgs = this.getImgUrls(10)
        for (var i = 0; i < imgs.length; i++) {
            var img = new Image()
            img.src = imgs[i]
            img.onload = function() {
                var imgInfo = {
                    target: img,
                    width: (200 * img.width) / img.height,
                    height: 200
                }
                _this.render(imgInfo)
            }
        }
    },
    render: function(imgInfo) {
        var clientWidth = this.$ct.width(),
            rowWidth = 0,
            lastimgInfo = imgInfo,
            newRowHeight = 0
        this.rowlist.push(imgInfo)
        for (var i = 0; i < this.rowlist.length; i++) {
            rowWidth += this.rowlist[i].width
        }
        if (rowWidth > clientWidth) {
            this.rowlist.pop()
            // rowWidth/200=clientWidth/x
            newRowHeight == (200 * clientWidth) / rowWidth
            this.layout(newRowHeight)

            this.rowlist = []
            this.rowlist.push(lastimgInfo)
        }
    },
    layout: function(imgheight) {
        var $imgwrap = $('<div class="imgwrap"></div>')
        for (var i = 0; i < this.rowlist.length; i++) {
            var $imgcontent = $('<div class="imgcontent"></div>'),
                $img = $(this.rowlist[i].target)

            $img.height(imgheight)
            $imgcontent.append($img)
            $imgwrap.append($imgcontent)
        }
        this.$ct.append($imgwrap)
    },
    getImgUrls: function(num) {
        var color, width, height, urls = []
        for (var i = 0; i < num; i++) {
            color = Math.random().toString(16).substring(2, 8)
            width = Math.floor(Math.random() * 100 + 50)
            height = Math.floor(Math.random() * 30 + 50)
            //http://placehold.it/125x71/1029b7/fff
            urls.push("http://placehold.it/" + width + "x" + height + "/" + color + "/fff")
        }
        return urls
    }
}

new Barrel($('.wrap'))
