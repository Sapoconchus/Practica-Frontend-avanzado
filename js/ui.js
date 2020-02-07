
import renderBeers from './beerCards';
import storage from './storage';

const { setItem } = storage();

export const SEARCH_INPUT = 'search_input';

// NAVBAR UI --> manages navbar input and prints beers

const input = document.querySelector(".input.search");
const form = document.getElementById("search-form");
const button = document.querySelector("button");
const searchGlass = document.querySelector(".navbar-icon");
const closeButton = document.querySelector(".close")
const navLogo = document.getElementById("nav-logo");
const filterContainer = document.querySelector('#beer-filters');

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


//Filter templates

const filterTemplate = (name) => {
    return `
        <button id="${name}-button-filter" class="open-filter"> ${name} <i class="icofont-filter"> </i> </button>
        <div id="${name}-filter-list" class="no-display">
            
        </div>
        `
}

const listTemplate = (input, index, name) => {
    return `
<li><label><input class="${index}" type="checkbox" name=${name} value=${input} checked> ${input}</label></li></br>
`}


//Home page filter render

export const renderFilter = (...args) => {

filterContainer.innerHTML="";    
    
args.forEach( item => {

    //making the filter
    const filterNode = document.createElement("div");
    filterNode.setAttribute("id", `${item.name}-filter`)  // OJO QUE ANTES ESTABA COMO CLASS
    filterNode.setAttribute("class", "printed-filter")
    const makeFilter = filterTemplate(item.name);

    filterNode.innerHTML = `${makeFilter}`;
    
    filterContainer.insertBefore(filterNode, filterContainer.firstChild)

    const listContainer = document.querySelector(`#${item.name}-filter-list`);

    const checkBoxes = item.inputs.map((check, index) => listTemplate(check, index, item.name)).join("");

    const list = document.createElement("ul");
    list.setAttribute("id",`${item.name}-filter-list-displayed`)

    list.innerHTML = `<p class="check-uncheck"><span class="check-all">check all</span>/<span class="uncheck-all"> uncheck all</span></p>${checkBoxes}`;

    listContainer.insertBefore(list, listContainer.firstChild);

    //add behaviour to the checkboxes printed

    const checkers = document.querySelectorAll(`input[name="${item.name}"]`);
    const beerCard = document.querySelectorAll(".beer-card");
    const checkAll = document.querySelector(".check-all");
    const uncheckAll = document.querySelector(".uncheck-all");

    console.log(checkers)
    // GOTTA TRY TO LINK THE CHECKER TO THE CARD THROUGH ID OR CLASS INSTEAD OF INDEX IN ORDER TO GROUP CHECKBOXES AND NOT DISPLAYING REPEATED VALUES

    checkers.forEach((item, index) => item.addEventListener("click", evt => beerCard[index].classList.toggle("no-display")));

    checkAll.addEventListener("click", evt =>{
        checkers.forEach((item, index) => {
            if(!item.checked) { item.checked = true;};
            beerCard[index].classList.remove("no-display");
            });
    });
  });

  uncheckAll.addEventListener('click', (evt) => {
    checkers.forEach((item, index) => {
      if (item.checked) { item.checked = false; }
      beerCard[index].classList.add('no-display');
    });


    // FILTER UI --> manages beer filter behaviour @ home page  OLD CODE TOO

const listExpander = document.getElementById(`${item.name}-filter`)
const expand = document.getElementById(`${item.name}-button-filter`);
const openList = document.getElementById(`${item.name}-filter-list`);

expand.addEventListener("click", evt => {
    openList.classList.toggle("no-display");
    listExpander.classList.toggle("expand-list"); //
});


});

}

export const extractIngredients = detail => {

    //so I can extract beer's ingredients on home render. GOTTA DEFINE WHAT TO RETURN
    const {ingredients: {malt, hops}} = detail;

    const maltList = malt.map(item => item.name);
    const maltFiltered = [...new Set(maltList)].join(", "); //cool! Found it on StackOverflow. I use both methods on purpose.
    const hopsList = hops.map(item => item.name).sort(); //can't chain the filter, throws an error ("It is not initializated")
    const hopsFiltered = hopsList.filter((item,i) => hopsList.indexOf(item) == i).join(", ");
};