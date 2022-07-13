"use strict";

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const textBox = document.querySelector(".header-text-box");
const buttonBox = document.querySelector(".button-container");
const loadingText = document.querySelector(".loadingtext");
const bootScreen = document.querySelector(".bootscreen");

//Bootscreen animations

(function () {
  loadingText.insertAdjacentHTML("beforeend", " DeFi");
  setTimeout(() => {
    loadingText.textContent = "Loading: ";
    loadingText.insertAdjacentHTML("beforeend", " Airdrops");
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
  }, 5000);
})();

//Homescreen animations

setTimeout(() => {
  textBox.classList.remove("hidden");
}, 11000);

setTimeout(() => {
  line1.classList.remove("hidden");
  line1.classList.add("line-fade");
}, 13000);

setTimeout(() => {
  line2.classList.remove("hidden");
  line2.classList.add("line-fade");
}, 17500);

setTimeout(() => {
  line3.classList.remove("hidden");
  line3.classList.add("line-fade");
}, 22000);

setTimeout(() => {
  buttonBox.classList.remove("hidden");
}, 25000);
