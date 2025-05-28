const User = require('../../model/user')

const checkUser = async (email) =>{
          try{
        
        return await User.findOne({email: email}, 'email')
}
    catch(error){
        console.error(error)
    }
}

const checkProduct = async (email, product) => {
    try{
   return await User.findOne({ email: email, product: { $in: [product] } })
    }
    catch(error){
        console.error(error)
    }
}

const addProduct = async(email, product) =>{
    try{
    return await User.findOneAndUpdate(
            { email, product: { $ne: product } },
            { $push: { product: product } },
            { new: true }
        );
    }
    catch(error){
        console.error(error)
    }
}




const newUser = async (name, email, phone, product) =>{
    try{
     return await User.create({userName: name, email: email, phoneNumber: phone, product: 'zoo'})
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {newUser, checkUser, checkProduct, addProduct}