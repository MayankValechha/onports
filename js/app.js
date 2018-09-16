//DEFINING FORM ELEMENTS
const registerForm = document.querySelector('form');
registerForm.addEventListener('submit', registerUser);

let firstName = document.getElementById('fName');
let lastName = document.getElementById('lName');
let mobileNum = document.getElementById('moNum');
let pass = document.getElementById('pass');
let confirmPass = document.getElementById('conPass');
let email = document.getElementById('email');

//LOGIN ELEMENTS
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', loginUser);

let userName = document.getElementById('username');
let password = document.getElementById('username');


//ADDING EVENT LISTENERS
firstName.addEventListener('blur', checkFName);
lastName.addEventListener('blur', checkLName);
mobileNum.addEventListener('blur', checkMobileNo);
pass.addEventListener('blur',checkPass);
confirmPass.addEventListener('blur',checkConfirmPass);


//checkFName for FirstName check.
function checkFName(){
//	For First Name
	if(firstName.value == '' || firstName.value.length > 10){
		firstName.style.border = '1px solid red';
	}
	else{
		firstName.style.border = '';
	}
}

//checkLName for LastName check.
function checkLName(){
	//For Last Name
	if(lastName.value == '' || lastName.value.length > 10){
		lastName.style.border = '1px solid red';
	}
	else{
		lastName.style.border = '';
	}
}

function checkMobileNo(){
	//For Mobile Number check.
	if(mobileNum.value == '' || mobileNum.value.length !=10){
		mobileNum.style.border = '1px solid red';
	}
	else{
		mobileNum.style.border = '';
	}
}

//checkPass for Checking Password.
function checkPass(){
	if(pass.value == '' || pass.value.length < 8){
		pass.style.border = '1px solid red';
	}
	else
		pass.style.border = '';
}

//checkConfirmPass for verifying Password.
function checkConfirmPass(){
	if(confirmPass.value != pass.value){
		confirmPass.style.border = '1px solid red';
	}
	else{
		confirmPass.style.border = '';
	}
}

Parse.initialize("PgKKTeokkD5m9RwFUsdumjY4nik1KnYDtkW5LwGI", "rdCO861N9xGCA7N2waGl1yzShT8XvHTRGHimBfYz"); 
Parse.serverURL = "https://parseapi.back4app.com/";

function registerUser() {
	
	var newUser = new Parse.User();
	newUser.set("username", mobileNum.value);
	newUser.set("firstName", firstName.value);
	newUser.set("lastName", lastName.value);
	newUser.set("contactNumber", Number(mobileNum.value));
	newUser.set("password", pass.value);
	newUser.set("email", email.value);

	newUser.save()
	.then((newUser) => {
  		alert('Your Account has been created!, Welcome to Onports.');
	}, 
	(error) => {
  	
  		alert('Failed to create new object, with error code: ' + error.message);
	});
	
}

function loginUser(){
	
	const newUser = Parse.User.logIn(userName.value, password.value);
	console.log(user);
}
