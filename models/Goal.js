const mangooose=require("mongoose");


const GoalSchema =new mangooose.Schema({

title:String,
date: {
    type:Date,
    default:Date.now
}

});

module.exports = mangooose.model("goals", GoalSchema);