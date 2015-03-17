var mongoose = require("mongoose");

var projectSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
});

var Project = mongoose.model('project', projectSchema);

