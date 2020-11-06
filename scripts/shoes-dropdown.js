"use strict";

// const dropdownSection = document.querySelector("#dropdown-section-1");
const toggleButton = document.querySelector("#hide-div");

// Get all year container divs
const yearContainers = document.querySelectorAll(".year-container");
//Array of the years you have as ID
const shoesYearsArr = [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
1993, 1994, 1995 , 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
2017, 2018, 2019, 2020];

//Waiting for the shoes from my API
var shoes= [];

fetch("https://nike-jordan.herokuapp.com/jordans")
  .then((response) => {
    console.log("response", response);
    //convert into JSobject
    return response.json();
  })
  .then((data) => {
    shoes = data.filter(
      (shoes) =>
        shoes.media.imageUrl !== null &&
        !shoes.media.imageUrl.includes("Placeholder") &&
        shoes.shoe.includes("Jordan")
    );

    shoesYearsArr.forEach((year) => {
      console.log(year,shoes.filter((shoe) => shoe.year === year));
      const dropdownSection = document.querySelector(
          `#shoes${year} .dropdown-section`
        );
      if(shoes.filter((shoe) => shoe.year === year).length){
          shoes
            .filter((shoe) => shoe.year === year)
            .forEach((shoe) => {
              const newImg = document.createElement("img"); // Creating a tag <img src=""/>
              newImg.setAttribute("src", shoe.media.imageUrl);
              newImg.style.width = "200px";
              dropdownSection.appendChild(newImg);
            })} else {
            const text = document.createElement("h6")
            text.innerText = "Yo, no shoes bro !"
            dropdownSection.appendChild(text);
            }
     
    });
  })
  .catch((error) => {
    console.log("Error :", error);
  });

// console.log(shoes)

yearContainers.forEach((yearContainer) => {
  yearContainer.addEventListener("click", function (event) {
    const dropdownSection = yearContainer.querySelector(".dropdown-section");
    dropdownSection.classList.toggle("closed");
  });
});

toggleButton.addEventListener("click", function () {
  dropdownSection.classList.toggle("closed");
});
const firstDiv = document.getElementById("dropdown-section");
const img =
  "'<img src=https://images-na.ssl-images-amazon.com/images/I/81YqrY9xHZL._AC_UX395_.jpg>'";
/*firstDiv.innerHTML= img;*/
