const {verifyGoogleToken, newUser} = require('../../services/auth/google')
const {checkUser, checkProduct, addProduct} = require('../../services/auth/register')

const google = async (req, res) =>{
     const {credential, clientId} = req.body
     
     const getData = await verifyGoogleToken(credential)

      const isUserExist = await checkUser(getData.email)
     const product = 'mesume'

     if(isUserExist){
       const isProductSame = await checkProduct(getData.email, product)

       if(isProductSame){
        console.log("user exist")
        return res.status(400).json({data: 'User already exist'})
       }

       const updateUser = await addProduct(getData.email, product)

       if(updateUser){
        console.log('profile updated')
        return res.status(200).json({data: 'Updated the profile successfully'})
       }
       return res.status(400).json({data: 'Unsuccessfull operation'})
    }

    const createUser = await newUser(getData.name, getData.sub, getData.email)
    if(!createUser){
     return res.status(400).json({data: 'operation failed'})
    }
     res.status(200).json({message: 'successfull'})
}

module.exports = google