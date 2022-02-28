const content = document.querySelector(".content");
document.querySelector(".first-name").textContent = firstName;
document.querySelector(".last-name").textContent = lastName;
document.querySelector(".team-color").style.backgroundColor = teamColor;

document.querySelector(".number").textContent = number.value;
if (number.isEnabled) {
  document.querySelector(".number-container").classList.remove("d-hidden");
}
if (isBorderRadius == false) {
  document.querySelector(".background").style.borderRadius = "0";
  document.querySelector(".background").style.borderRadius = "0";
}

var i = 1;

function spamAllSponsor() {
  i = 1;
  let sponsors = document.querySelectorAll(".sponsor-item");

  sponsors.forEach((element) => {
    element.classList.remove("d-hidden");
    console.log(element);

    setTimeout(() => {
      console.log(element.innerHTML + "tick");
      element.classList.remove("inactive");
      element.classList.add("active");
      console.log(element.className);

      setTimeout(() => {
        element.classList.remove("active");
        element.classList.add("inactive");
      }, lifeTime * 1000);
    }, i * 1000);

    i += lifeTime;
  });
}

logok.forEach((element) => {
  let li = document.createElement("li");
  li.classList.add("sponsor-item");
  li.classList.add("d-hidden");

  let img = document.createElement("img");
  img.src = element;

  li.appendChild(img);

  content.appendChild(li);
});

spamAllSponsor();
setInterval(() => {
  spamAllSponsor();
}, logok.length * lifeTime * 1000);

var ws = new WebSocket('http://127.0.0.1:8080/');
 
ws.onmessage = function(evt) {
      console.log('received from server: ' + evt.data);
}