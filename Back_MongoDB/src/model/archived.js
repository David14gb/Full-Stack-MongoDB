const {Schema, model} = require("mongoose");

const archivedSchema = new Schema({
    title: String, 
    description: String,
    date: Date,
    content: String,
    author: String,
    archiveDate: Date
})

module.exports = model('archived', archivedSchema, 'archived')