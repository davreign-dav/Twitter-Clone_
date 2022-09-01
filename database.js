
const mongoose = require("mongoose");



class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://davreign:Dc@1003>@cluster0.sfqj5nm.mongodb.net/test")
            .then(() => {
                console.log("Database connection successful!!!");
            })
            .catch((err) => {
                console.log("Database connection error!! " + err);
            })
    }
}

module.exports = new Database();