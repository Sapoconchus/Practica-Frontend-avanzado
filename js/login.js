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
				<p> Our network is available only for registered and authorized users. Please leave your name and e-mail and we'll provide you and account user and password.</p>
				<p class="changer-paragraph"> Are you already registered?</br> <span class="form-changer"> Sign up / log in </span></p>
			
				</div>
			
			<div class="form-container">
				<form id="register-form" class="register">
					<h2> Register form </h2>
					<label for="username"> Username </label>
					<input name="username" id="username" type="text" placeholder="username" required></input>
					<label for="email"> e-mail </label>
					<input name="email" id="reg-email" class="email" type="email" placeholder="e-mail" required></input>
					<button type="submit">Submit</button>
				</form>
				<form id="login-form" class="login no-display">
					<h2> Login form </h2>
					<label for="log-email"> e-mail </label>
					<input name="email" id="log-email" class="email" type="email" placeholder="e-mail" required></input>
					<button type="submit">Submit</button>
				</form>
			</div>
			<div class="problem-logging">
			<a href="">Forgot password?</a>
			<a href="">Report an issue</a>
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

	registerForm.addEventListener('submit', evt => {
		evt.preventDefault();
		if(userName.validity.valid && regEmail.validity.valid) {
			userRegister(username.value, regEmail.value)
			cookie.setItem(regEmail.name, regEmail.value, 365)
			container.innerHTML = "";
			window.alert("user correctly created! Now you can proceed to log in")
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

			const {user: {apiKey}} = apiUser;
			

			if (apiUser.success) {			
			//llamar a getUser y comprobar si existe
			cookie.setItem(logEmail.name, logEmail.value, 365)
			cookie.setItem("user_key", apiKey) 
			container.innerHTML = "";
			renderBeers(local.getItem(SEARCH_INPUT));
			document.querySelector(".filters-container").classList.remove("no-display");
			} else {
				console.error("user not found");
				window.alert("User unknown. Please register.")
			};
		};	
	});
};

export default renderLogin;

	//1.1 si le da a recordar a cookieStorage, si no a sessionStorage (y cuando refresque, otra vez) 
