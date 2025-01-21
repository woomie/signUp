import getFormInput from "./getData.js";

const auth = firebase.auth();
const button = document.getElementById("submit")



//authenticate the user
document.addEventListener('DOMContentLoaded', function() {
    button.addEventListener("click", event =>{
        const name= getFormInput("name");
        const email= getFormInput("email");
        const birthday= getFormInput("birthday");
        const password = getFormInput("password");
        event.preventDefault();
        //console.log(name);
    
        auth.createUserWithEmailAndPassword(email,password)
        .then((userDetails) =>{
            console.log(userDetails)
            let userId = userDetails.user.uid;
            console.log(`User was created and here is the ID: ${userId}`)
        }).catch((e)=>{
            console.log(e);
        })
    });
});


   