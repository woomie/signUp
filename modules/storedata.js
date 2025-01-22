// function to store the data to firebase
import {database} from "../config/config-auth.js";
import submitForm from "./submitformdata.js";

//const dataBase = firebase.database();
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form").addEventListener("submit", submitForm);
    //form.reset();
});

function postToFirebase(obj){
    let reference =database.ref("users/").push();
    reference.set({
        name:obj.name,
        email:obj.email,
        birthday:obj.birthday,
        password:obj.password
    });
}

export default postToFirebase;