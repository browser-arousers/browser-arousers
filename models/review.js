const mongoose = require('mongoose');

const Review = new mongoose.Schema({
    gameTitle:{type:String,required:true},
    author:{type:String,required:true},
    body:{type:String,required:true},
});

module.exports = mongoose.model('games', Review);