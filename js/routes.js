import renderBeers from "./beerCards.js";
import storage from './storage.js';
import { SEARCH_INPUT } from './navbar.js';

const { getItem } = storage();

page('/', () => {
    console.log("route");
    renderBeers(getItem(SEARCH_INPUT));
});
page();