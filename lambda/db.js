const mongoose = require("mongoose");
// mongoose.connect('mongodb+srv://devuser:Ws0Si7fENElQ0ljJ@cluster0.cvyvxco.mongodb.net/watthub_dev').then(() => {
//     console.log('Success: Database connected');
// }).catch((err) => {console.log("Error: connecting to database")});


function connect() {
    console.log('Start: Database connected 123');
    //mongoose.set('strictQuery', true);
    // mongoose.connect(process.env.MONGO_URI)
    mongoose.connect("mongodb+srv://devuser:Ws0Si7fENElQ0ljJ@cluster0.cvyvxco.mongodb.net/watthub_dev", {serverSelectionTimeoutMS: 5000,useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log('Success: Database connected');
    }).catch((err) => {
        console.log(err);
        console.log("Error: connecting to database")
    });
    // const db = mongoose.connection
    // db.on("error", (err) => console.error(err))
    // db.once("open", () => console.log("Connected to database !"))
}
module.exports.connect = connect