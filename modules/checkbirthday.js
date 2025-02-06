//this component will check how many days are left before a users birthday
import {database} from "../config/config-auth.js";
import getQoutes from "./getquotes.js";

//console.log(window.location.origin + '/index.html');
//creates a reference to the users node stored in firebase
let userRef = database.ref("users");
userRef.on("value", (data) =>{
    const response = data.val();
    Object.keys(response).forEach(key => {
        //create a date object with users birthday
        let today = new Date();
        let userBirthday = new Date(response[key].birthday);

        //get only the day and month
        let day = userBirthday.getUTCDate();
        let month = userBirthday.getUTCMonth(); //months starts from 0 for jan to 11 for dec

        //create the users next birthday using the current year in our case it shld be 2025
        let currentYear = today.getFullYear();
        console.log(currentYear)
        const nextBirthday = new Date (currentYear, month, day)
        console.log(nextBirthday)

        // reset the time so the calculation is more accurate
        today.setHours(0, 0, 0, 0);
        nextBirthday.setHours(0, 0, 0, 0);
        //check if the birthday has passed
        if(today > nextBirthday){
            nextBirthday.setFullYear(currentYear + 1);
        }
        // Calculating the time difference of two dates
        let DifferenceInTime = nextBirthday.getTime() - today.getTime();

        // Calculating the no. of days between two dates
        let DifferenceInDays = Math.round(DifferenceInTime / (1000 * 3600 * 24));
        //console.log(DifferenceInDays);

        //check if its users birthday or not
        const birthday = document.getElementById("birthday");
        const quote = document.getElementById("quotes");

        if (nextBirthday.getTime() === today.getTime()){
            birthday.innerHTML = `<h1>Happy Birthday ${response[key].name}</h1>`
            getQoutes().then(quotes =>{
                quote.innerHTML = `<h5>-${quotes}</h5>`
            });
        } else{
            birthday.innerHTML = `<h1>you have ${DifferenceInDays} Days until your birthday</h1>`
        }

        
       
        
    });
});


