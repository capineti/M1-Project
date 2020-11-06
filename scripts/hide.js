
'use strict'


const dropdownSection = document.querySelector("#dropdown-section-1");
const toggleButton =document.querySelector("#hide-div");


toggleButton.addEventListener('click', function(){
    dropdownSection.classList.toggle('closed');
})
const firstDiv = document.getElementById("dropdown-section-1");
const img="'<img src=https://images-na.ssl-images-amazon.com/images/I/81YqrY9xHZL._AC_UX395_.jpg>'"
/*firstDiv.innerHTML= img;*/
