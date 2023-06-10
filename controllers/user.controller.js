exports.createUser = (req,res)=>{
    try {
         const {name,email,password,dob} = req.body;
         const createUser = {
             name,email,password,dob
         }
         res.status(200).json(createUser)
    } catch (error) {
         res.status(500).json({message: error.message});
    }
}


