import getFormInput from "./getData.js";
import {auth} from "../config/config-auth.js";


//const auth = firebase.auth();
const form = document.getElementById("form")


//authenticate the user
document.addEventListener('DOMContentLoaded', function() {
    form.addEventListener("submit", event =>{
        event.preventDefault();

        const name= getFormInput("name");
        const email= getFormInput("email");
        const birthday= getFormInput("birthday");
        const password = getFormInput("password");
        //console.log(name);
    
        auth.createUserWithEmailAndPassword(email,password)
        .then((userDetails) =>{
            console.log(userDetails)
            let userId = userDetails.user.uid;
            console.log(`User was created and here is the ID: ${userId}`);
            
            //post the data from the form to firebase, the function was created in storeData file.
            
            window.location.href = "./modules/home.html";

        }).catch((e)=>{
            console.log(e);
        })
    });
});


   