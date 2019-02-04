var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Pingu2.jpeg') {
		myImage.setAttribute ('src','images/Pingu.jpeg');
	  } else {
	  	myImage.setAttribute ('src','images/Pingu2.jpeg');
	  }
}
var myButton = document.getElementById('namePrompt');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Pingu is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Pingu is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}