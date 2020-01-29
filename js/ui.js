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
    });
}

const filterTemplate = (name) => {
    return `
    <div class="${name}-filter"> 
        <button id="${name}-button-filter" class="open-filter"> ${name} <i class="icofont-filter"> </i> </button>
        <div id="${name}-filter-list" class="no-display">
            
        </div>
    </div>`
}

const listTemplate = (input, index) => {
    return `
<li><label><input class="${index}" type="checkbox" name=${input} value=${input} checked> ${input}</label></li></br>
`}


//Home page filter render

export const renderFilter = (array, name, anchor) => {
    
    //render filter
    const filter = filterTemplate(name);
    const filterContainer = document.createElement("div");

    filterContainer.innerHTML = `${filter}`;
    anchor.appendChild(filterContainer)


    const listContainer = document.querySelector(`#${name}-filter-list`);
    
    
    const checkBoxes = array.map((item, index) => listTemplate(item, index)).join("");
    const list = document.createElement("ul");
    list.setAttribute("id",`${name}-filter-list-displayed`)

    list.innerHTML = `<p class="check-uncheck"><span class="check-all">check all</span>/<span class="uncheck-all"> uncheck all</span></p>${checkBoxes}`;
    listContainer.insertBefore(list, listContainer.firstChild);

    console.log(checkBoxes)
    
    //add behaviour to the checkboxes printed

    const checkers = document.querySelectorAll("input[type=checkbox]");
    const beerCard = document.querySelectorAll(".beer-card");
    const checkAll = document.querySelector(".check-all");
    const uncheckAll = document.querySelector(".uncheck-all");

    console.log(checkers)

    checkers.forEach((item, index) => item.addEventListener("click", evt => beerCard[index].classList.toggle("no-display")));

    checkAll.addEventListener("click", evt =>{
        checkers.forEach((item, index) => {
            if(!item.checked) { item.checked = true;};
            beerCard[index].classList.remove("no-display");
            });
    });

    uncheckAll.addEventListener("click", evt =>{
        checkers.forEach((item, index) => {
            if(item.checked) { item.checked = false;};
            beerCard[index].classList.add("no-display");
            });
    });

// FILTER UI --> manages beer filter behaviour @ home page

const listExpander = document.getElementById(`${name}-filter`)
const expand = document.getElementById(`${name}-button-filter`);
const openList = document.getElementById(`${name}-filter-list`);

expand.addEventListener("click", evt => {
	openList.classList.toggle("no-display");
	listExpander.classList.toggle("expand-list"); //
})




};






