var mongoose = require('mongoose');
config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb+srv://kingSlayer:@Desmond01@cluster0.es2ug.mongodb.net/detailsDb?retryWrites=true&w=majority',config);
var conn = mongoose.connection;

var detailSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    mobileNumber: String,
    addharCard: String,
    email: String,
    address: String
});

var detailModel = mongoose.model('Detail', detailSchema);

module.exports= detailModel;