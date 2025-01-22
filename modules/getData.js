// function that returns the value of each form input
function getFormInput(id){
    return document.getElementById(id).value;

}

//exporting the data to be used by other modules
export default getFormInput;