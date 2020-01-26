import storage from './storage.js';
import renderBeers from './beerCards.js';
import { SEARCH_INPUT } from './ui.js';
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
				<p> Our network is available only for registered and authorized users. Please leave your user name and e-mail and we'll provide you and account user and password.</p>
				<p class="changer-paragraph"> Are you already registered?</br> <span class="form-changer"> Sign up / log in </span></p>
			</div>
			
			<div class="form-container">
				<form id="register-form" class="register">
					<h2> Register form </h2>
					<label for="username" class="form-label"> Username </label>
					<input name="username" id="username" class="form-input" type="text" placeholder="username" required></input>
					<label for="email" class="form-label"> e-mail </label>
					<input name="email" id="reg-email" class="email form-input"" type="email" placeholder="e-mail" required></input>
					<button type="submit">Submit</button>
				</form>
				<form id="login-form" class="login no-display">
					<h2> Login form </h2>
					<label for="log-email" class="form-label"> e-mail </label>
					<input name="email" id="log-email" class="email form-input"" type="email" placeholder="e-mail" required></input>
					<label id="keep-logged-label"> keep me logged 
					<input id ="keep-logged" type="checkbox" name="logged">					
					</label>
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
		// register form elements
	const registerForm = document.querySelector('#register-form')
	const userName = document.querySelector("#username");
	const regEmail = document.querySelector("#reg-email");
		// login form elements
	const loginForm = document.querySelector("#login-form");
	const logEmail = document.querySelector("#log-email");
		//hanger of forms
	const changeForm = document.querySelector(".form-changer");
		//keep logged checkbox
	const keepLogged = document.querySelector("#keep-logged");
	
	registerForm.addEventListener('submit', evt => {
		evt.preventDefault();
		if(userName.validity.valid && regEmail.validity.valid) {
			userRegister(username.value, regEmail.value)
			container.innerHTML = "";
			window.alert("user correctly created! Now you can proceed to log in")
			renderLogin();
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
			
				//checking if the user exists on DB
			if (apiUser.success) {			
				//keep logged on cookieStorage or session only
				if(keepLogged.checked) {
					cookie.setItem(logEmail.name, logEmail.value, 365);
					cookie.setItem("user_key", apiKey);
				} else {
					session.setItem(logEmail.name, logEmail.value);
					session.setItem("user_key", apiKey);	
				}
			container.innerHTML = "";
			await renderBeers(local.getItem(SEARCH_INPUT));
			document.querySelector(".filters-container").classList.remove("no-display");
			} else {
				console.error("user not found");
				window.alert("User unknown. Please register.")
			};
		};	
	});
};

export default renderLogin;