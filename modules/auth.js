import getFormInput from "./getData.js";
import {auth} from "../config/config-auth.js"; //auth is already initialised in config-auth
import postToFirebase from "./storedata.js";



const form = document.getElementById("form")


//authenticate the user
document.addEventListener('DOMContentLoaded', function() {
    if(form){
        form.addEventListener("submit", event =>{
            event.preventDefault();
    
            const email= getFormInput("email");
            const password = getFormInput("password");

        
            auth.createUserWithEmailAndPassword(email,password)
            .then((userDetails) =>{
                console.log(userDetails)
                let userId = userDetails.user.uid;
                console.log(`User was created and here is the ID: ${userId}`);
                const userData = {
                    name: getFormInput("name"),
                    email: email,
                    birthday:getFormInput("birthday"),
                    uid: userId
                }
            
            postToFirebase(userData);
            
            window.location.href = "./modules/home.html";


            }).catch((e)=>{
                console.log(e);
            })
        });
    }
    
});

//sign in users

const signIn = document.getElementById("form-login");
if(signIn){
    signIn.addEventListener("submit", event =>{
        event.preventDefault();
        const email= getFormInput("email");
        const password = getFormInput("password");
        auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
          console.log('Logged in user!');
          window.location.href = "./home.html";
        })
        .catch(error => {
          console.log(error.message);
        })
    });
}


//Sign out the User

const logOut = document.getElementById("sign-out");
if(logOut){
    logOut.addEventListener("click", event =>{
        //event.preventDefault();
        auth.signOut();
        window.location.href ="./signin.html";
    
    });
}

  


  



   