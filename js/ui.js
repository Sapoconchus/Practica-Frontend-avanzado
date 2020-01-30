
import renderBeers from './beerCards';
import storage from './storage';

const { setItem } = storage();

export const SEARCH_INPUT = 'search_input';

// NAVBAR UI --> manages navbar input and prints beers

const input = document.querySelector('.input.search');
const form = document.getElementById('search-form');
const button = document.querySelector('button');
const searchGlass = document.querySelector('.navbar-icon');
const closeButton = document.querySelector('.close');
const navLogo = document.getElementById('nav-logo');

searchGlass.addEventListener('click', (evt) => {
  navLogo.classList.add('no-display');
  form.classList.toggle('no-display');
  searchGlass.classList.toggle('no-display');
});

closeButton.addEventListener('click', (evt) => {
  form.classList.toggle('no-display');
  searchGlass.classList.toggle('no-display');
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (input.validity.valid) {
    renderBeers(input.value);
    window.location.replace('/');
    setItem(SEARCH_INPUT, input.value);
  }
});

// Intersection observer navbar
export const launchIo = (element) => {
  const navLogo = document.getElementById('nav-logo');
  const options = {};
  const cb = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLogo.classList.toggle('no-display');
      }
    });
  };

  const io = new IntersectionObserver(cb, options);
  io.observe(element);

  navLogo.addEventListener('click', (evt) => {
    evt.preventDefault();
    window.scrollTo(0, 0);
    navLogo.classList.add('no-display');
  });
};

const filterTemplate = (input, index) => `
    <li><label><input class ="${index}" type="checkbox" name=${input} value=${input} checked> ${input}</label></li></br>`;


// Home page filter render

export const renderFilter = (array) => {
  // render filter
  const container = document.querySelector('#date-filter-list');
  const checkBoxes = array.map((item, index) => filterTemplate(item, index)).join('');
  const list = document.createElement('ul');

  list.innerHTML = `${checkBoxes} <button class="close-filter no-display"> close </button>`;
  container.appendChild(list);

  // add behaviour to the checkboxes printed

  const checkers = document.querySelectorAll('input[type=checkbox]');
  const beerCard = document.querySelectorAll('.beer-card');
  const checkAll = document.querySelector('.check-all');
  const uncheckAll = document.querySelector('.uncheck-all');

  checkers.forEach((item, index) => item.addEventListener('click', (evt) => beerCard[index].classList.toggle('no-display')));

  checkAll.addEventListener('click', (evt) => {
    checkers.forEach((item, index) => {
      if (!item.checked) { item.checked = true; }
      beerCard[index].classList.remove('no-display');
    });
  });

  uncheckAll.addEventListener('click', (evt) => {
    checkers.forEach((item, index) => {
      if (item.checked) { item.checked = false; }
      beerCard[index].classList.add('no-display');
    });
  });
};

// FILTER UI --> manages beer filter behaviour @ home page

const listContainer = document.querySelector('.date-filter');
const expand = document.querySelector('.open-filter');
const list = document.querySelector('#date-filter-list');

expand.addEventListener('click', (evt) => {
  list.classList.toggle('no-display');
  listContainer.classList.toggle('expand-list');
});
