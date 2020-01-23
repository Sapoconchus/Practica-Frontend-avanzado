import renderBeers from "./beerCards.js";
import storage from './storage.js';
import { SEARCH_INPUT } from './navbar.js';
import renderDetails from "./beerDetail.js";
import { getDetails } from './api.js';
import renderLogin from './login.js';

const { getItem } = storage();

page('/', () => {
	//if user exists username && password (API call)
		//document.querySelector(".filters-container").classList.remove("no-display")
    	//renderBeers(getItem(SEARCH_INPUT));
    //if user doesn´t exist -> render login
    renderLogin();
});

page('/beers/:id', ctxt => {
	//if user exists
    document.querySelector(".filters-container").classList.add("no-display")
    renderDetails(ctxt.path);
    //if user doesn´t exist -> render login
})
page();