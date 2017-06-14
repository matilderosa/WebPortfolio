var express               = require("express"),
    app                   = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Root Route
app.get("/", function(req, res){
    res.render("landing");
});

app.listen(process.env.PORT, process.env.ID, function(){
    console.log("server has started");
});
