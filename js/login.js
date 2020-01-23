import storage from './storage.js';
import renderBeers from './beerCards.js';
import { SEARCH_INPUT } from './navbar.js';
import { userRegister, getUser } from './api.js';

const cookie = storage("cookieStore");
const session = storage("sessionStore");
const local = storage("localStore");

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
					<input name="email" id="reg-email" class="email" type="email" placeholder="e-mail" required></input>
					<button type="submit">Adelante!</button>
				</form>
				<form id="login-form" class="no-display">
					<label for="log-email"> e-mail </label>
					<input name="email" id="log-email" class="email" type="email" placeholder="e-mail" required></input>
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

	const registerForm = document.querySelector('#register-form')
	const userName = document.querySelector("#username");
	const regEmail = document.querySelector("#reg-email");

	const loginForm = document.querySelector("#login-form");
	const logEmail = document.querySelector("#log-email");
	
	const changeForm = document.querySelector(".form-changer");
	//const email = document.querySelectorAll(".email");

	registerForm.addEventListener('submit', evt => {
		evt.preventDefault();
		if(userName.validity.valid && regEmail.validity.valid) {
			userRegister(username.value, regEmail.value)
			cookie.setItem(regEmail.name, regEmail.value, 365)
			container.innerHTML = "";
			window.alert("user correctly created! Now you will be redirected to the home page")
			renderBeers("pale"/*local.getItem(SEARCH_INPUT)*/);
			document.querySelector(".filters-container").classList.remove("no-display")
		};
	})	

	changeForm.addEventListener('click', evt =>{
		registerForm.classList.toggle("no-display");
		loginForm.classList.toggle("no-display");

	})

	loginForm.addEventListener('submit', async evt => {
		evt.preventDefault();

		if(logEmail.validity.valid) {

			const apiUser = await getUser(logEmail.value);
			const { email } = apiUser

			if (email === logEmail.value) {			
			//llamar a getUser y comprobar si existe
     		cookie.setItem(logEmail.name, logEmail.value, 365)
			container.innerHTML = "";
			renderBeers("pale"/*local.getItem(SEARCH_INPUT)*/);
			document.querySelector(".filters-container").classList.remove("no-display");
			} else {
				console.error("user not found");
				window.alert("User unknown. Please register.")
			};
		};	
	});
};

export default renderLogin;

//1. meter la info de login en cookieStorage
	//1.1 si le da a recordar a cookieStorage, si no a sessionStorage (y cuando refresque, otra vez) 
//2. on submit, lanzar renderBeers

//3. intentar hacer un diálogo aparte para registrarse