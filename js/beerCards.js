import { getBeers } from './api';
import storage from './storage';
import { renderFilter, launchIo } from './ui';

const { setItem, getItem } = storage();

const container = document.querySelector('.card-container');

const cardTemplate = (beer) => `
    <div class="beer-card" id="${beer.beerId}">
        <div class="beer-pic">
            <a href="/beers/${beer.beerId}"><img src="${beer.image}"></a>
        </div>
            <div class="info-container">
                <div class = "beer-info">
                   <a href="/beers/${beer.beerId}"> <h1 id="beer-name">${beer.name}</h1></a>
                    <article class="first-rendered">${beer.description.length < 170 ? beer.description : `${beer.description.slice(0, 170)} [...]`}.</br><span class="brew-year"> First brewed on ${beer.firstBrewed}.</span></article>
                </div>
                <div class ="card-pills">
                    <div id="social-pills">
                        <i class="pill icofont-like"></i>
                        <i id="likes-num" class ="pill">${beer.likes}</i>
                        <i class="pill icofont-speech-comments"></i>
                        <i id="comments-num" class ="pill">${beer.comments.length}</i>
                    </div>
                    <div id="link-pill">
                    <a href="/beers/${beer.beerId}" class="pill"><p> Go to details </p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

const renderBeers = async input => {
    try {
        const beers = await getBeers(input);

        const main = document.querySelector("main");
        const dates = [];
        const prices = [];
        const ingredients = [];
        const names = [];
        const htmlBeers = beers.map(beer => {
            dates.push(beer.firstBrewed);
            prices.push(beer.price)
            ingredients.push(beer.ingredients);
            names.push(beer.name);
            return cardTemplate(beer);
        }).join("");

        const priceFiltered = [...new Set(prices)];

    const cardContainer = document.createElement('section');
    cardContainer.classList.add('card-container');

    cardContainer.innerHTML = `${htmlBeers}`;
    main.appendChild(cardContainer);

    // oberver for displaying logo on navbar
    const cardObserved = document.querySelector('.beer-card:nth-child(5)');
    launchIo(cardObserved);

        // Filter Objects and printing

        const dateFilter = {
            inputs: dates,
            name: "firstly-brewed"
            };

        const priceFilter = {
            inputs: prices,
            name: "price"
        };
        const nameFilter = {
            inputs: names,
            name: "brand"
        };


        const ingredientsFilter = {
            inputs: ingredients,
            name: "ingredients"
        };

        renderFilter(dateFilter, priceFilter, nameFilter)

    // likes manager AINT WORKING JUST YET

    const thumbUp = document.querySelectorAll(".icofont-like");

    console.log(thumbUp);

    thumbUp.forEach(icon => {

        const id = icon.parentNode.parentNode.parentNode.parentNode.getAttribute("id");

        const liker = evt => {
        
          addLike(`/beers/${id}`); 
          icon.classList.add("liked");
          const likeNum= icon.nextSibling.nextSibling;
          likeNum.innerText = parseInt(likeNum.innerText) + 1;
          icon.removeEventListener('click', liker)
        }

        getItem(`/beers/${id}`) !== "liked" ?  icon.addEventListener('click', liker) : icon.classList.add("liked");
    })    

    } catch (err) {
        console.log(err);
    }
};

export default renderBeers;
