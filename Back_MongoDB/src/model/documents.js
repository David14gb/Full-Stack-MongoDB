const {Schema, model} = require("mongoose");

const documentSchema = new Schema({
    title: String, 
    description: String,
    date: Date,
    content: String,
    author: String,
    archiveDate: Date
})

module.exports = model('document', documentSchema, 'document')