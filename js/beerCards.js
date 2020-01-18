import {getBeers} from "./api.js";

const container = document.querySelector(".card-container")

const cardTemplate = beer => {
    return `
    <div class="beer-card">
        <div class="beer-pic">
            <img src="${beer.image}">
        </div>
            <div class="info-container">
                <div class = "beer-info">
                    <h1>${beer.name}</h1>
                    <article class="first-rendered">${beer.description.length < 100 ? beer.description : beer.description.slice(0,100) + '... <span class="read-more">[read more]</span>'}.<span class="brew-year"> First brewed on ${beer.firstBrewed}.</span></article>
                    <article class="expanded no-display scroll">${beer.description} <span class="read-more">[close]</span>.<span class="brew-year"> First brewed on ${beer.firstBrewed}.</span></article>
                    </div>
                <div class ="card-pills">
                    <div>
                        <i class="pill icofont-like"></i>
                        <p id="likes-num" class ="pill">${beer.likes}</p>
                        <i class="pill icofont-speech-comments"></i>
                        <p id="comments-num"class ="pill">${beer.comments.length}</p>
                    </div>
                    <div>
                    <p class="beer-id">${beer.beerId}</p>
                    <a href="/beers/${beer.beerId}" class="pill"><p> + more info</p></a>
                    </div>
                </div>
            </div>
        </div>`
} 


const renderBeers = async input => {
    try{
        const beers = await getBeers(input);
        const container = document.querySelector(".card-container");
        const htmlBeers = beers.map(beer => cardTemplate(beer)).join("");
        container.innerHTML = `${htmlBeers}`;

        const expand = document.querySelector(".read-more");
        const firstArticle = document.querySelectorAll(".first-rendered");
        const xpandArticle = document.querySelectorAll(".expanded");

        expand.addEventListener("click", evt => {
            console.log("click!");
            firstArticle.classList.toggle("no-display");
            xpandArticle.classList.toggle("no-display");  
        })



    } catch (err) {
        console.log(err);
    }
};


const renderDetails = async id => {
    //pintar info extra
};




export default renderBeers;

