
const mongoose = require("mongoose");



class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://david:david123@cluster0.5p5d6fb.mongodb.net/Help")
            .then(() => {
                console.log("Database connection successful!!!");
            })
            .catch((err) => {
                console.log("Database connection error!! " + err);
            })
    }
}

module.exports = new Database();
