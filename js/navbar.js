//import {getBeers} from "./api.js";


const input = document.querySelector(".input.search");
const form = document.getElementById("search-form");
const button = document.querySelector("button");
const searchGlass = document.querySelector(".navbar-icon");
const closeButton = document.querySelector(".close")
const navLogo = document.getElementById("nav-logo");

searchGlass.addEventListener("click", evt =>{
	form.classList.toggle("no-display");
	searchGlass.classList.toggle("no-display");
});

closeButton.addEventListener("click", evt =>{
	form.classList.toggle("no-display");
	searchGlass.classList.toggle("no-display");
});



form.addEventListener("submit", evt => {
 evt.preventDefault();

     console.log("hola")

})