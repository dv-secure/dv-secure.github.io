const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Passcode: " + position.coords.latitude +
    "<br>Passphrase: " + position.coords.longitude;
  localStorage.setItem('myList', JSON.stringify(x.innerHTML))
}




