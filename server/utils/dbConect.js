const  { default: mongoose }  = require('mongoose');
require("dotenv").config();
function dbConect(){
    mongoose.connect(process.env.MONGODB_CONECTION
    , {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   }
    )
    .then(() => console.log("connection successful"))
   .catch((err) => console.log(err));
   

}

module.exports = dbConect;