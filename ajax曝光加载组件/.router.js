function setRouter(app){ 
 var router = app; 

app.get('/loadMore', function(req, res) {
        var index=req.query.indexdata  //获取前端发来的数据
        res.send(index)   //发送数据给前端
});}
 module.exports.setRouter = setRouter