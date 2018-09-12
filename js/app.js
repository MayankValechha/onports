const registerForm = document.querySelector('form');
registerForm.addEventListener('submit', runEvent);

const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const mobileNum = document.getElementById('moNum');
const pass = document.getElementById('pass');
const confirmPass = document.getElementById('conPass');

firstName.addEventListener('blur', function(){
	if(firstName.value == '' )
		firstName.style.border = '1px solid red';
	else
		firstName.style.border = '1px solid #ced4da';
});

lastName.addEventListener('blur', function(){
	if(lastName.value == '' )
		lastName.style.border = '1px solid red';
	else
		lastName.style.border = '1px solid #ced4da';
});

mobileNum.addEventListener('blur', function(){
	if(mobileNum.value == '')
		mobileNum.style.border = '1px solid red';
	else
		mobileNum.style.border = '1px solid #ced4da';
});

pass.addEventListener('blur', function(){
	if(pass.value == '')
		pass.style.border = '1px solid red';
	else
		pass.style.border = '1px solid #ced4da';
});


confirmPass.addEventListener('blur', function(){
	if(confirmPass.value !== pass.value)
		confirmPass.style.border = '1px solid red';
	else
		confirmPass.style.border = '1px solid #ced4da';
});


function runEvent() {
//	Will Work on it Later.
}

	