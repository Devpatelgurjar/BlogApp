const mongoose = requrie("mongoose");

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is needed"]      
    },
    description:{
        type:String,
        required:[true,"description is needed"], 
    },
    images:{
        type:String,
        required:[true,"images is needed"],
    }
},{ timestamps: true });

const BlogModel = mongoose.model("blog",BlogSchema);

modules.export = BlogModel;