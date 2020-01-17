import {getBeers} from "./api.js";
import renderBeers from "./beerCards.js";
import storage from './storage.js';

const { setItem, getItem } = storage();

export const SEARCH_INPUT = 'search_input';

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

	if(input.validity.valid) {
		//pintar cervezas
		renderBeers(input.value);
		setItem(SEARCH_INPUT, input.value)
	}

});