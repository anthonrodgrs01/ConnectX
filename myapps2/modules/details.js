var mongoose = require("mongoose");
config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(
  "mongodb+srv://kingSlayer:@Desmond01@cluster0.es2ug.mongodb.net/detailsDb?retryWrites=true&w=majority",
  config
);
var conn = mongoose.connection;

var detailSchema = new mongoose.Schema({
  name: String,
  needAndSupplier: String,
  essentialItem: String,
  mobileNumber: String,
  addharCard: String,
  email: String,
  city: String,
  state: String,
  country: String,
  address: String,
});

var detailModel = mongoose.model("Detail", detailSchema);

module.exports = detailModel;
