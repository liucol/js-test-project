function setRouter(app){ 
 var router = app; 

app.get('/loadMore', function(req, res) {
        var index=req.query.indexdata;
        res.send(index);
});}
 module.exports.setRouter = setRouter