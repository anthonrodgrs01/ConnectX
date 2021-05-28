var express = require("express");
var app = express();
var port = 3000;

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
config ={
    useNewUrlParser: true,
    useUnifiedTopology: true

}
mongoose.connect("mongodb+srv://kingSlayer:@Desmond01@cluster0.es2ug.mongodb.net/Forms?retryWrites=true&w=majority",config);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/forms.html");
   });
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

var nameSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    mobileNumber: String,
    addharCard: String,
    email: String,
    address: String
   });

var User = mongoose.model("User", nameSchema);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });

