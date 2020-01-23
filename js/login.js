import storage from './storage.js';
import renderBeers from './beerCards.js';
import { SEARCH_INPUT } from './navbar.js';

const cookie = storage("cookieStore");
const session = storage("sessionStore");

const logInDialog = `
<div class="user-mgmt">
			<div class="logo-container">
				<h1 class="logo"> Beer<span>Flix</span></h1>
			</div>
			<div class="intro-message">
				<p> Nuestra plataforma funciona sólo con usuarios registrados. Por favor, date de alta en este formulario. si ya estás registrado, puedes acceder <span class="form-changer"> aquí </span></p>	
				<p><strong>Ponte cómodo, outsider. Este es tu sitio.</strong></p>
			</div>
			<p class="form-changer"> Ya estoy registrado </p>
			<div class="form-container">
				<form id="register-form" class="register">
					<label for="username"> Username </label>
					<input name="username" id="username" type="text" placeholder="username o e-mail" required></input>
					<label for="email"> e-mail </label>
					<input name="email" id="email" type="email" placeholder="e-mail" required></input>
					<button type="submit">Adelante!</button>
				</form>
				<form id="login-form" class="no-display">
					<label for="email"> e-mail </label>
					<input name="email" id="email" type="email" placeholder="e-mail" required></input>
					<button type="submit">Adelante!</button>
				</form>
			</div>
			<div class="problem-logging">
			<a href="">¿No recuerdas tu contraseña?</a>
			<a href="">Reporta un problema</a>
			</div>
		</div>`;

const renderLogin = () => {
	const container = document.querySelector("main");
	container.innerHTML = logInDialog;

	const loginForm = document.querySelector("#login-form");
	const userName = document.querySelector("#username");
	const email = document.querySelector("#email");


	loginForm.addEventListener('submit', evt => {
		evt.preventDefault();
		if(userName.validity.valid && email.validity.valid) {

			//setItem(userName.name, username.value);
			session.setItem(email.name, email.value)
			container.innerHTML = "";
			renderBeers("pale"/*getItem(SEARCH_INPUT)*/);
			document.querySelector(".filters-container").classList.remove("no-display")
		};
	})	
}

export default renderLogin;

//1. meter la info de login en cookieStorage
	//1.1 si le da a recordar a cookieStorage, si no a sessionStorage (y cuando refresque, otra vez) 
//2. on submit, lanzar renderBeers

//3. intentar hacer un diálogo aparte para registrarse