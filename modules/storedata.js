// function to store the data to firebase
import {database} from "../config/config-auth.js";


function postToFirebase(obj){
    let reference =database.ref("users/").push();
    reference.set({
        name: obj.name,
        email: obj.email,
        birthday: obj.birthday,
        uid: obj.uid
    });
}

export default postToFirebase;