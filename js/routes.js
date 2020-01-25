import renderBeers from "./beerCards.js";
import storage from './storage.js';
import { SEARCH_INPUT } from './navbar.js';
import renderDetails from "./beerDetail.js";
import { getDetails } from './api.js';
import renderLogin from './login.js';

const local = storage('localStore');
const cookie = storage('cookieStore');
const session = storage('sesionStore')

page('/', () => {

    if(cookie.getItem("user_key") || sessionStorage.getItem("user_key")){
        document.querySelector(".filters-container").classList.remove("no-display");
        document.querySelector("main").innerHTML = "";
        renderBeers(local.getItem(SEARCH_INPUT));
    } else {
        renderLogin();
    }
    
});

page('/beers/:id', ctxt => {
	if(cookie.getItem("user_key") || sessionStorage.getItem("user_key")){
    document.querySelector(".filters-container").classList.add("no-display")
    renderDetails(ctxt.path);
    } else {
        renderLogin()
    }
});

page();