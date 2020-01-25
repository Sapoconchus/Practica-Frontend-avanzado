import {getBeers} from "./api.js";
import renderBeers from "./beerCards.js";
import storage from './storage.js';

const { setItem, getItem } = storage();

export const SEARCH_INPUT = 'search_input';

// NAVBAR UI --> manages navbar input and prints beers

const input = document.querySelector(".input.search");
const form = document.getElementById("search-form");
const button = document.querySelector("button");
const searchGlass = document.querySelector(".navbar-icon");
const closeButton = document.querySelector(".close")
const navLogo = document.getElementById("nav-logo");

searchGlass.addEventListener("click", evt =>{
	navLogo.classList.add("no-display");
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
		renderBeers(input.value);
		window.location.replace("/");
		setItem(SEARCH_INPUT, input.value)
	}

});

// Intersection observer navbar
export const launchIo = (element) => {

const navLogo = document.getElementById("nav-logo");
const options = {};
const cb = (entries, observer) => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			navLogo.classList.toggle("no-display");
		}
	});
};

const io = new IntersectionObserver(cb, options);
io.observe(element);

navLogo.addEventListener('click', evt => {
	evt.preventDefault();
	window.scrollTo(0,0);
	navLogo.classList.add("no-display")
})

}




// FILTER UI --> manages beer filter behaviour @ home page

const listContainer = document.querySelector(".date-filter")
const expand = document.querySelector(".open-filter");
//const close = document.querySelector(".close-filter");
const list = document.querySelector("#date-filter-list");

expand.addEventListener("click", evt => {
	list.classList.toggle("no-display");
	listContainer.classList.toggle("expand-list");
	//close.classList.toggle("no-display");
	//expand.classList.toggle("no-display");

})




