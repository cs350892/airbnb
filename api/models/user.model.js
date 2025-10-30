import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
        passwod:{
            type:String,
            required:true,
            minLength:6
        },
        Timestamp:{
            type:Date,
            default:Date.now
        }
});

userSchema.methods.toJSON=function(){
    const userObject=this.toObject();
    delete userObject.password;
    return userObject;
}


 const User=mongoose.model("User",userSchema);
 export default User;
    
