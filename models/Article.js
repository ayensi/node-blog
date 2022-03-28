const mongoose = require("mongoose")

const ArticleSchema = new mongoose.Schema({
	title: {
        type: String,
        required: true
    },
	category: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
	date: {
        type: Date,
        required: true,
        default: Date.now
    }

},
{collection : 'Article'})

module.exports = mongoose.model('Article', ArticleSchema,'Article');
