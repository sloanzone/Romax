import './App.css';
import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Template from "./forms/template.js"

function App() {

    const [authData, setAuthData] = useState(null);

     const gContainer = {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       marginTop: '50px'
     };

     return (
        <div>
        <Template />

        <GoogleOAuthProvider clientId={"378012159791-1cphgmo5gab66nd2l1hcrnsk70fuejfq.apps.googleusercontent.com"}>
         <div style={gContainer}>
           <GoogleLogin
             onSuccess={(credentialResponse) => {
               setAuthData(credentialResponse);
               console.log("Success!", credentialResponse);
             }}
             onError={() => {
               console.log("Login Failed");
             }}
           />
           {authData && (
             <div>
               <p>Credential: {authData.credential}</p>
               <p>Select By: {authData.select_by}</p>
             </div>
           )}
         </div>
        </GoogleOAuthProvider>
        </div>
     );
}

export default App;
