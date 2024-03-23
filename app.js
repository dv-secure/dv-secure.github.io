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

const popup = new Popup({
  id: "fishy",
  fontSizeTitle: 1,
  title: "Simple. Easy. Secure",
  backgroundColor: "#ffffff",
  titleColor: "#05c560",
  textColor: "#101922",
  closeColor: "#FF0000",
  linkColor: "#FFF",
  underlineLinks: "true",
  fontSizeMultiplier: 1,
  titleMargin: "2em",
  content: `
  Welcome to easy and secure file encryption!`,
  borderWidth: ".2em",
  borderColor: "#FFF",
  showImmediately: true,
});



