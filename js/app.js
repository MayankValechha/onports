//DEFINING FORM ELEMENTS
const registerForm = document.querySelector('form');
registerForm.addEventListener('submit', runEvent);

const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const mobileNum = document.getElementById('moNum');
const pass = document.getElementById('pass');
const confirmPass = document.getElementById('conPass');
let all

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
	if(mobileNum.value == '' || mobileNum.value.length !=10 || isNaN(mobileNum.input)){
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


function runEvent() {
//	Will Work on it Later.
}
