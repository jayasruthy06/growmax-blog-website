import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    coverimg:{
        type:String,
        required: true
    },
    authorname:{
        type:String,
        required:true
    },
    authorimg:{
        type:String
    },
    category:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

const BlogModel = mongoose.models.blog || mongoose.model('blog', Schema);

export default BlogModel