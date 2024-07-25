const RegisterDatabase = require("../models/register");

exports.UploadRegister = async (req, res) =>{
    const data = req.body;
    try {
        const newRegister = new RegisterDatabase(data)
        await newRegister.save();
        res.json({message:"success", data:newRegister})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


exports.getRegister = async(req, res) =>{
    try {
        const allData = await RegisterDatabase.find({}); 
      if(allData.length>0){
        res.json({length:allData.length, data:allData})
      }else{
        res.json({message:'Thanks for using our API., but here no data available please check later'});
      }
    } catch (error) {
        res.json({message:'Somthing went wrong'})
    }
    res.json({data:req.data})
}









