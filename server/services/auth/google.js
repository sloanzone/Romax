const User = require('../../model/user')
const {CLIENTID} = require('../../config/config')

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(CLIENTID); 

const verifyGoogleToken = async (token) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENTID, 
        });

        const payload = ticket.getPayload(); 
        return payload;
    } catch (error) {
        console.error('Invalid Google token', error);
        return null;
    }
}


const newUser = async (name, googleId, email, product) =>{
    try{
     return await User.create({userName: name, googleId: googleId, email: email, product: 'zoo'})
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {verifyGoogleToken, newUser}
