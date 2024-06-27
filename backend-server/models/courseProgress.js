const mongoose = require("mongoose");

const courseProgressSchema = new mongoose.Schema({
     courseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"course"
     },
     completedVideos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subSection"
     }]

})

module.exports = mongoose.model("courseProgress",  courseProgressSchema);