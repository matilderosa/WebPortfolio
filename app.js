var express               = require("express"),
    app                   = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Root Route
app.get("/", function(req, res){
    res.render("landing");
});

app.listen(3000, function(){
    console.log("server has started");
});
