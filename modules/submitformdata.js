import getFormInput from "./getData.js";
import postToFirebase from "./storedata.js";

function submitForm(event){
    event.preventDefault();
    let obj ={
        name: getFormInput("name"),
        birthday: getFormInput("birthday"),
        email: getFormInput("email"),
        password: getFormInput("password")
    }
    postToFirebase(obj);
}

export default submitForm;