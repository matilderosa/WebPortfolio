var express               = require("express"),
    cloudinary            = require('cloudinary');
    app                   = express();



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


//Cloudinary Config
cloudinary.config({
  cloud_name: 'sample',
  api_key: '874837483274837',
  api_secret: process.env.CLOUDINARY_URL
});

cloudinary.uploader.upload("/assets/Untitled-9.jpg", function(result) {
  console.log(result)
});
cloudinary.uploader.upload("/assets/UrbanFarmed.jpg", function(result) {
  console.log(result)
});
cloudinary.uploader.upload("/assets/YelpCamp.jpg", function(result) {
  console.log(result)
});




// Root Route
app.get("/", function(req, res){
    res.render("landing");
});

app.listen(process.env.PORT, process.env.ID, function(){
    console.log("server has started");
});
