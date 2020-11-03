"use strict";

fetch("https://nike-jordan.herokuapp.com/jordans")
  .then((response) => {
    console.log("response", response);
    //convert into JSobject
    return response.json();
  })

  //after you get converted ,then do something
  .then((data) => {
    data.forEach((obj) => {
      const newImg = document.createElement("img"); // Creating a tag <img src=""/>

      newImg.setAttribute("src", obj.media.imageUrl);
      newImg.style.width = "200px";
      document.body.appendChild(newImg);
    });
  })
  .catch((error) => {
    console.log("Error,error");
  });
