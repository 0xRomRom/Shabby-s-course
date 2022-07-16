"use strict";

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const textBox = document.querySelector(".header-text-box");
const buttonBox = document.querySelector(".button-container");
const shabby = document.querySelector(".shabby");
const loadingText = document.querySelector(".loadingtext");
const bootScreen = document.querySelector(".bootscreen");
const content = document.querySelector(".content");
const expectations = document.querySelector(".expectations");
const instructions = document.querySelector(".instructions");
const goButton = document.querySelector(".go");
const goText = document.querySelector(".go-text");
const noButton = document.querySelector(".no");
const fingerDown = document.querySelector("fa-hand-point-down");

//Initialize
// expectations.style.display = "none";
// instructions.style.display = "none";

//Bootscreen animations

const initialFunction = () => {
  loadingText.insertAdjacentHTML("beforeend", " DeFi");
  setTimeout(() => {
    loadingText.textContent = "Loading: ";
    loadingText.insertAdjacentHTML("beforeend", " Airdrops");
    content.classList.add("removed");
    expectations.classList.add("removed");
  }, 1000);
  setTimeout(() => {
    loadingText.textContent = "Loading: ";
    loadingText.insertAdjacentHTML("beforeend", " Financial Independence");
  }, 2000);
  setTimeout(() => {
    loadingText.textContent = "Loading: ";
    loadingText.insertAdjacentHTML("beforeend", " Gateway To Freedom");
  }, 4000);
  setTimeout(() => {
    bootScreen.classList.add("hidden");
    content.classList.remove("removed");
    expectations.classList.remove("removed");
  }, 6000);
  setTimeout(() => {
    shabby.classList.remove("hidden");
    shabby.classList.add("shabbyfade");
  }, 4500);
};
initialFunction();

//Homescreen animations

goButton.addEventListener("mouseover", () => {
  shabby.src = "./img/shabby.jpg";
  goText.style.color = "white";
});
goText.addEventListener("click", () => {
  expectations.style.display = "flex";
  instructions.style.display = "initial";
});

goButton.addEventListener("mouseleave", () => {
  shabby.src = "./img/shabby2.jpg";
  goText.style.color = "black";
});

noButton.addEventListener("mouseover", () => {
  shabby.src = "./img/shabby3.jpg";
});
noButton.addEventListener("mouseleave", () => {
  shabby.src = "./img/shabby2.jpg";
});

//
setTimeout(() => {
  shabby.src = "./img/shabby.jpg";
}, 13000);

setTimeout(() => {
  shabby.src = "./img/shabby2.jpg";
}, 13100);

setTimeout(() => {
  shabby.src = "./img/shabby.jpg";
}, 13200);

setTimeout(() => {
  shabby.src = "./img/shabby2.jpg";
}, 13300);
setTimeout(() => {
  shabby.src = "./img/shabby.jpg";
}, 13400);

setTimeout(() => {
  shabby.src = "./img/shabby2.jpg";
}, 13500);
setTimeout(() => {
  shabby.src = "./img/shabby.jpg";
}, 13600);

setTimeout(() => {
  shabby.src = "./img/shabby2.jpg";
}, 13700);

//

setTimeout(() => {
  textBox.classList.remove("hidden");
}, 15000);

setTimeout(() => {
  line1.classList.remove("hidden");
  line1.classList.add("line-fade");
}, 16500);

setTimeout(() => {
  line2.classList.remove("hidden");
  line2.classList.add("line-fade");
}, 20000);

setTimeout(() => {
  line3.classList.remove("hidden");
  line3.classList.add("line-fade");
}, 24500);

setTimeout(() => {
  buttonBox.classList.remove("hidden");
}, 28000);

fingerDown.addEventListener("click", () => {});
