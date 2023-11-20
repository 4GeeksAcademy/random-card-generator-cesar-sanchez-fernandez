/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const num = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const palos = ["♦", "♥", "♣", "♠"];

  const randomNum = Math.floor(Math.random() * num.length);
  const randomPalos = Math.floor(Math.random() * palos.length);

  document.getElementById("numero").innerHTML = num[randomNum];

  if (randomPalos === 0 || randomPalos === 1) {
    document.getElementById(
      "palosArriba"
    ).innerHTML = `<span class="text-danger"> ${palos[randomPalos]} </span>`;
    document.getElementById(
      "palosAbajo"
    ).innerHTML = `<span class="text-danger"> ${palos[randomPalos]} </span>`;
  } else {
    document.getElementById("palosArriba").innerHTML = palos[randomPalos];
    document.getElementById("palosAbajo").innerHTML = palos[randomPalos];
  }

  let button = document.getElementById("boton");
  button.addEventListener("click", _ => {
    location.reload();
  });
};
