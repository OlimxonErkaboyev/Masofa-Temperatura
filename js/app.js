// // Kim birinchi boradi masalasi -->


// let elForm = document.querySelector(".form")
// let elFormInput = document.querySelector(".form-input")
// let elWalkResult = document.querySelector(".walk-natija")
// let elBikeResult = document.querySelector(".bike-natija")
// let elCarResult = document.querySelector(".car-natija")
// let elPlaneResult = document.querySelector(".plane-natija")


// elForm.addEventListener("submit", function(evt){
//     evt.preventDefault();
//     let man_hours = (((elFormInput.value * 1000) / 60) / 60);
//     let man_min = (((elFormInput.value * 1000) / 60) % 60);
//     let bike_hours = (((elFormInput.value * 1000) / 335) / 60);
//     let bike_min = (((elFormInput.value * 1000) / 335) % 60);
//     let car_hours = (((elFormInput.value * 1000) / 1167) / 60);
//     let car_min = (((elFormInput.value * 1000) / 1167) % 60);
//     let plane_hours = (((elFormInput.value * 1000) / 13333) / 60);
//     let plane_min = (((elFormInput.value * 1000) / 13333) % 60);

//     elFormInput.value = null;

    
//     elWalkResult.textContent = Math.floor(man_hours) + " hours " + Math.round(man_min) + " minut";   
//     elBikeResult.textContent = Math.floor(bike_hours) + " hours " + Math.round(bike_min) + " minut";   
//     elCarResult.textContent = Math.floor(car_hours) + " hours " + Math.round(car_min) + " minut";   
//     elPlaneResult.textContent = Math.floor(plane_hours) + " hours " + Math.round(plane_min) + " minut";   
    
// })
// //1-Masala tugadi <--



// // Harorat hisoblagich -->
// let elTempForm = document.querySelector(".temp-form");
// let elTempInputOne = document.querySelector(".temp-inputOne");
// let elTempInputTwo = document.querySelector(".temp-inputTwo");
// let elTempBtn = document.querySelector(".temp-btn");
    
    
// elTempForm.addEventListener("submit", function(evt){
//     evt.preventDefault();
//     let result = ((9 / 5) * elTempInputOne.value) + 32;
//     elTempInputTwo.setAttribute("placeholder", result);


// });
// 2-Masala tugadi <--


// let str = 'Assalomu# #alaykum# #yaxshimisizlar#';

// for (let i = 0; i < str.length; i++) {
//     if(str.indexOf("#") -1 === " "){
//         str[i] = "(";
//     }else if(str.indexOf("#")+ 1 !== " "){
//         str[i] = ")";
//     }else{
//         continue;
//     }
// }

// console.log(str);