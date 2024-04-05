const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

const pgp = 'EB85.BB4';
const shaKey = 'adf-120-b4'

function showPosition(position) {
  x.innerHTML =
    "PGP Key: " + pgp + position.coords.latitude +
    "<br>SHA-256 Key: " + shaKey + position.coords.longitude;
  localStorage.setItem('myList', JSON.stringify(x.innerHTML));
  // console.log(x)
}

let logData = localStorage.getItem('myList');

console.log(`Updated Logo Data ${logData}`)


// console.log(x)

const retryButton = document.querySelector('.js-retry-location');
retryButton.addEventListener('click', event => {
  navigator.geolocation.getCurrentPosition((coords) => {
    // console.log('coords');
  });
});

const clickButton = document.getElementById('sendBtn');
clickButton.addEventListener("click", () => {
  // console.log("Clicked")
  clickButton.style.display = "none"
})


// window.onload = function () {
//   var button = document.getElementById('sendBtn');
//   setInterval(function () {
//     button.click();
//   }, 1000);  // this will make it click again every 1000 miliseconds
// };

// document.getElementById("demo").onblur = function () {
//   var userText = this.value;
// }

// var savedInfo = document.getElementById('demo').value


// function getname(name) {
//   name = document.getElementById("generatedData").value;
//   return name;
// }

console.log(x)






