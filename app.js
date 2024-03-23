const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "PGP Key: " + position.coords.latitude +
    "<br>SHA-256 Key: " + position.coords.longitude;
  localStorage.setItem('myList', JSON.stringify(x.innerHTML))
}


const retryButton = document.querySelector('.js-retry-location');
retryButton.addEventListener('click', event => {
  navigator.geolocation.getCurrentPosition((coords) => {
    console.log('coords');
  });
});

