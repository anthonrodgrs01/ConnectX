var express = require("express");
var app = express();


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
config ={
    useNewUrlParser: true,
    useUnifiedTopology: true

}
mongoose.connect("mongodb+srv://kingSlayer:@Desmond01@cluster0.es2ug.mongodb.net/detailsDb?retryWrites=true&w=majority",config);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/forms2.html");
   });
 
app.listen(5000, () => {
 console.log("Server listening on port " + 5000);
});

var nameSchema = new mongoose.Schema({
    name: String,
    needAndSupplier: String,
    essentialItem: String,
    mobileNumber: String,
    addharCard: String,
    email: String,
    city: String,
    state: String,
    country: String,
    address: String

   });

var User = mongoose.model("Detail", nameSchema);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    // res.send("Item saved");
    console.log('database saved');
    })
    .catch(err => {
    console.log('database saved')
    });
    res.redirect("http://localhost:6001")
   });

