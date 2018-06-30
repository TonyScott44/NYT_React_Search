const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    url: String

    // ex.
    // title: 'Ali Sells Jersey House And Moves to Chicago',
    // date: '1974-07-18T00:00:00Z',
    // url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;