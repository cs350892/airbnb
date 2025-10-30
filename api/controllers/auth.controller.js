import User from "../models/user.model";

//register 
export const register=async(req,res)=>{
    try{
        const {name,email,passord}=req.body;
        const existingUser=await User.findOne({
            email:email
        });

        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill in all fields"
            })
        }
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"Email already registered"
            })
        }

        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({
            name,
            email,
            password:hashedPassword
        })
    }
    catch(error){
        console.log("Registraion error :",error);
        return res.status(500).json({
            success:false,
            messafe:"server error"
        })
    }
}

