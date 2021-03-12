const mongoose = require('mongoose');

//would the user name and timestamp be declared here at all?
const Review = new mongoose.Schema({
    body:{type:String,required:true},
    title:{type:String,required:true},
});

module.exports = mongoose.model('reviews', Review);