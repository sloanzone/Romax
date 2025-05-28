import './App.css';
import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Template from "./forms/template.js"

function App() {

    const [authData, setAuthData] = useState({
      credential: ''
    });

     const gContainer = {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       marginTop: '50px'
     };

    const handleGoogle = async (e) => {
      console.log('Auth Data', authData)

      try {
        const response = await fetch('http://localhost:5050/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(authData)
        });

      if (!response.ok) {
        throw new Error('Connection not working')
      
      }

        const data = await response.json();
        console.log('Sucess:', data);
        alert('Form submitted successfully!');

        } catch (error) {
            console.error('Error:', error);
            alert('Submission failed');
      }
    }

     return (
        <div>
        <Template />

        <GoogleOAuthProvider clientId={"378012159791-1cphgmo5gab66nd2l1hcrnsk70fuejfq.apps.googleusercontent.com"}>
         <div style={gContainer}>
           <GoogleLogin
             onSuccess={(credentialResponse) => {
               setAuthData(credentialResponse);
               console.log("Success!", credentialResponse);
               handleGoogle(authData);
             }}
             onError={() => {
               console.log("Login Failed");
             }}
           />
           {authData && (
             <div>
             </div>
           )}
         </div>
        </GoogleOAuthProvider>
        </div>
     );
}

export default App;
