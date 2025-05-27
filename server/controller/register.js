

const register = async(req, res) =>{
    try{
 const {name, email, phone} = req.body
 console.log(name, email, phone)
   if(!name || !email || !phone){
    res.status(400).json({data: "error receving the user credentials"})
   }


   
   res.status(200).json({data: name})
}
catch(error){
    console.error(error)
}

}

module.exports = register