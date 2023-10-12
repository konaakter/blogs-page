const  { default: mongoose }  = require('mongoose');

function dbConect(){
    mongoose.connect('mongodb+srv://blog:1243erfdfgr5@cluster0.ah3a7qz.mongodb.net/?retryWrites=true&w=majority'
    , {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   }
    )
    .then(() => console.log("connection successful"))
   .catch((err) => console.log(err));
   

}

module.exports = dbConect;