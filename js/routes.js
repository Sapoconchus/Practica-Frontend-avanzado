import renderBeers from "./beerCards.js";
import storage from './storage.js';
import { SEARCH_INPUT } from './navbar.js';
import renderDetails from "./beerDetail.js";
import { getDetails } from './api.js';

const { getItem } = storage();

page('/', () => {
    renderBeers(getItem(SEARCH_INPUT));
});

page('/beers/:id', ctxt => {
    // renderBeerDetail('id')
    console.log(ctxt)
    renderDetails(ctxt.path);

})
page();