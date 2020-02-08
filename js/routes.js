import renderBeers from './beerCards';
import storage from './storage';
import { SEARCH_INPUT } from './ui';
import renderDetails from './beerDetail';
import { getDetails } from './api';
import renderLogin from './login';

const local = storage('localStore');
const cookie = storage('cookieStore');
const session = storage('sesionStore');

page('/', () => {
  if (cookie.getItem('user_key') || sessionStorage.getItem('user_key')) {
    document.querySelector('.filters-container').classList.remove('no-display');
    document.querySelector('main').innerHTML = '';
    renderBeers(local.getItem(SEARCH_INPUT));
  } else {
    renderLogin();
  }
});

page('/beers/:id', (ctxt) => {
  if (cookie.getItem('user_key') || sessionStorage.getItem('user_key')) {
    document.querySelector('.filters-container').classList.add('no-display');
    renderDetails(ctxt.path);
    console.log(ctxt.path);
    console.log(ctxt);
  } else {
    renderLogin();
  }
});

page();
