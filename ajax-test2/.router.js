function setRouter(app){ 
 var router = app; 


    app.get("/loadMore",function(req,res){
        var firends=["小明","小红"]
        res.send(firends);
    })}
 module.exports.setRouter = setRouter