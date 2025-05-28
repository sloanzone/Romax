const User = require('../../model/user')
const {newUser, checkUser, checkProduct, addProduct} = require('../../services/auth/register')

const register = async(req, res) =>{
    try{
 const {name, email, phone} = req.body
 console.log(name, email, phone)
   if(!name || !email || !phone){
    return res.status(400).json({data: "error receving the user credentials"})
   }

    const isUserExist = await checkUser(email)
     const product = 'mesume'

    if(isUserExist){
       const isProductSame = await checkProduct(email, product)

       if(isProductSame){
        console.log("user exist")
        return res.status(400).json({data: 'User already exist'})
       }

       const updateUser = await addProduct(email, product)

       if(updateUser){
        console.log('profile updated')
        return res.status(200).json({data: 'Updated the profile successfully'})
       }
       return res.status(400).json({data: 'Unsuccessfull operation'})
    }

    const createUser = await newUser(name, email, phone, product)
    if(!createUser){
     return res.status(400).json({data: 'operation failed'})
    }
   res.status(200).json({data: 'success'})
}
catch(error){
    console.error(error)
}

}

module.exports = register