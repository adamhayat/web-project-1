
/* Image changer */
let myImage = document.getElementById('imageChange'); // this makes querySelector run when myImage is used

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/image2.jpg') {
    myImage.setAttribute('src','images/2f0.gif');
  } else {
    myImage.setAttribute('src','images/image2.jpg');
  }
  }

/* Personalized welcome message */
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName() {
  let myName = prompt('Enter the name of one of your friends:');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Wow! ` + myName + ` thinks that Kish 💩 is shit at Catan!`;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Wow, Kish 💩 is really shit at Catan! ';
}

myButton.onclick = function() {
  setUserName();
}
