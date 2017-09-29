var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  //从这里开始看，上面不要看

  if(path==='/index.html'){
     response.setHeader('Content-type','text/html; charset=UTF-8')
     var string = fs.readFileSync('./index.html', 'utf8')
     response.end(string)
  }else if(path==='/main.js'){
    response.setHeader('Content-type','text/javascript')
    var string = fs.readFileSync('./main.js', 'utf8')
    response.end(string)
  }else if(path==='/jquery.min.js'){
    response.setHeader('Content-type','text/javascript')
    var string = fs.readFileSync('./jquery.min.js', 'utf8')
    response.end(string)
  }else if(path==='/style.css'){
    response.setHeader('Content-type','text/css')
    var string = fs.readFileSync('./style.css', 'utf8')
    response.end(string)
  }else if(path==='/responseText'){
     response.end('"杨柳，18"')
  }else{
    response.end('nothing')
  }

  // 代码结束，下面不要看
  console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
