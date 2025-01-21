// function that returns the value of each form input
function getFormInput(id){
    return document.getElementById(id).value;

}
// document.addEventListener('DOMContentLoaded', function() {
//     const button =document.getElementById("submit");
//     button.addEventListener("click", (e)=>{
//         e.preventDefault();
//         console.log(getFormInput("name"));
//     })
// });

export default getFormInput;