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
                    <article>${beer.description}<span class="brew-year"> First brewed on ${beer.firstBrewed}.</span></article>
                </div>
                <div class ="card-pills">
                    <div>
                        <i class="pill icofont-like"></i>
                        <p id="likes-num" class ="pill">${beer.likes}</p>
                        <i class="pill icofont-speech-comments"></i>
                        <p id="comments-num"class ="pill">${beer.comments.length}</p>
                    </div>
                    <div>
                    <a href="/beers/${beer.beerId}" class="pill"><p> + more info</p></a>
                    </div>
                </div>
            </div>
        </div> 
`;
};


const renderBeers = async input => {
    try{
        const beers = await getBeers(input);
        const container = document.querySelector(".card-container");
        const htmlBeers = beers.map(beer => cardTemplate(beer)).join("");
        container.innerHTML = `
        <div class="card-container">
        ${htmlBeers}
        </div>
        `;
    } catch (err) {
        console.log(err);
    }
};


const renderDetails = async id => {
    //pintar info extra
};




export default renderBeers;

