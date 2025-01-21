// function to store the data

function postToFirebase(obj){
    let reference =firebase.database().ref("users/").push();
    reference.set({
        name:obj.name,
        email:obj.email,
        dateOfBirth:obj.dateOfBirth,
        password:obj.password
    });
}

export default postToFirebase;