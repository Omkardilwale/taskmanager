const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://omkar:omkar@cluster0.ytvap.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("connection start")).catch((error)=> console.log(error.message));