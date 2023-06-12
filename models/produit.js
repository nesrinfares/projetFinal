const mongoose = require("mongoose");
const schema = mongoose.Schema;

const produitSchema = new schema({
  name: String,
  image: String,
  catégori: String,
  type:String,
  gender:String,
  prix:String,
  description: String,
  details: String, 
  images:{type:Array  } ,
  
});
const Produit = mongoose.model("Produit", produitSchema);
module.exports = Produit;
