var express               = require("express"),
    cloudinary            = require('cloudinary');
    app                   = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Cloudinary Config
cloudinary.config({
  cloud_name: 'mrosa',
  api_key: '468163595992795',
  api_secret: process.env.CLOUDINARY_URL
});



// Root Route
app.get("/", function(req, res){
    res.render("landing");
});

app.listen(process.env.PORT, process.env.ID, function(){
    console.log("server has started");
});
