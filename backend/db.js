// const { connect } = require("mongoose");
const mongoose = require("mongoose")

let connection = mongoose.connect(process.env.URL)

module.exports = {
    connection
}