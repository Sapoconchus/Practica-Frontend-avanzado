import { getBeers } from './api.js';
import storage from './storage.js';
import { renderFilter, launchIo } from './ui.js';

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


const renderBeers = async (input) => {
  try {
    const beers = await getBeers(input);

    const main = document.querySelector('main');
    const dates = [];
    const prices = [];
    const htmlBeers = beers.map((beer) => {
      dates.push(beer.firstBrewed);
      // prices.push(beer.price)
      return cardTemplate(beer);
    }).join('');

    // const priceFiltered = [...new Set(prices)];

    const cardContainer = document.createElement('section');
    cardContainer.classList.add('card-container');

    cardContainer.innerHTML = `${htmlBeers}`;
    main.appendChild(cardContainer);

    // oberver for displaying logo on navbar
    const cardObserved = document.querySelector('.beer-card:nth-child(5)');
    launchIo(cardObserved);

    // filter logic
    // #1 : by date

    renderFilter(dates);
    // renderFilter(priceFiltered) // to be implemented on next versions
  } catch (err) {
    console.log(err);
  }
};

export default renderBeers;
