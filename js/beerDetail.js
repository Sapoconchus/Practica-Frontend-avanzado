import {getDetails } from './api.js'

const detailTemplate = ({name, likes, comments, description, firstBrewed, price, brewersTips} = {}, malt, hops) => {
    return `
    <section class="detail-wrapper">
    <div class="img-container">
        <img src="https://images.punkapi.com/v2/keg.png">
    </div>	
    <header class="beer-header">
    <h1>${name}</h1>
    <div class="underlying">
        <div class="social-info">
         <i class="pill icofont-like"></i>
         <p class="pill likes-num">${likes}</p>
         <i class="pill icofont-speech-comments"></i>
         <p class="pill comments-num">${comments.length}</p>
     </div>
     <div class="price-tag">
         <h2 class="price">${price}€</h2>
     </div>
    </div>
 <article>${description}</article>
</header>
<div class="more-info">
    <p class="beer-date"> <span class="info-header">Firstly brewed on: </span>${firstBrewed}</p>
    <p class="brewers-tip"><span class="info-header">Brewer tip: </span>${brewersTips}</p>
    <p class="ingredients"><span class="info-header">Ingredients:</span> malt (<span class="ingredients-detail">${malt} </span>), hops (<span class="ingredients-detail">${hops}</span>)</p>      			
</div>
</section>
`};


const renderDetails = async id => {
    const detail = await getDetails(id);
    //console.log(detail);
    const {ingredients: {malt, hops}} = detail;

    const maltList = getNamer(malt);
    const hopsList = getNamer(hops);

    const mainContainer = document.querySelector("main");    

    mainContainer.innerHTML = detailTemplate(detail, maltList, hopsList);
};

export default renderDetails;


const getNamer = (array) => {
    
    const newArray = []

    for(let i = 0; i < array.length; i++) {
       newArray.push(` ${array[i].name}`)
    }
    return newArray;
}
