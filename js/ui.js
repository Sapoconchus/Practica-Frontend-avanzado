import {addLike} from "./api.js";

const thumbUp = querySelectorAll(".icofont-like");
const getid = querySelector(".beer-id")
const id = getid.innerText;


thumbUp.addEventListener("click", evt => {
    console.log(id)
;})