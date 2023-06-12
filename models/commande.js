const mongoose = require("mongoose");
const schema = mongoose.Schema; 

const commandeSchema = new schema({

    name_user:{type:String , required:false},
    image:String,
    name_produit:{type:String , required:true},
    date_commande:{type:String , required:true},
    prix:String,
    status:String ,
  });
  const Commande= mongoose.model('Commande', commandeSchema);
  module.exports= Commande ;