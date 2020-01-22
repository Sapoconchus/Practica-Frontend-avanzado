import renderBeers from "./beerCards.js";
import storage from './storage.js';
import { SEARCH_INPUT } from './navbar.js';
import renderDetails from "./beerDetail.js";
import { getDetails } from './api.js';

const { getItem } = storage();

page('/', () => {
	document.querySelector(".filters-container").classList.remove("no-display")
    renderBeers(getItem(SEARCH_INPUT));
});

page('/beers/:id', ctxt => {
    document.querySelector(".filters-container").classList.add("no-display")
    renderDetails(ctxt.path);

})
page();