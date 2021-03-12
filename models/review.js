const mongoose = require('mongoose');

//would the user name and timestamp be declared here at all?
const Review = new mongoose.Schema({
    reviewBody:{type:String,required:true},
    
});

module.exports = mongoose.model('reviews', Review);