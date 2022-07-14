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
  }, 5000);
  setTimeout(() => {
    shabby.classList.remove("hidden");
    shabby.classList.add("shabbyfade");
  }, 4500);
};
initialFunction();

// (function () {
//   loadingText.insertAdjacentHTML("beforeend", " DeFi");
//   setTimeout(() => {
//     loadingText.textContent = "Loading: ";
//     loadingText.insertAdjacentHTML("beforeend", " Airdrops");
//     content.classList.add("removed");
//     expectations.classList.add("removed");
//   }, 1000);
//   setTimeout(() => {
//     loadingText.textContent = "Loading: ";
//     loadingText.insertAdjacentHTML("beforeend", " Financial Independence");
//   }, 2000);
//   setTimeout(() => {
//     loadingText.textContent = "Loading: ";
//     loadingText.insertAdjacentHTML("beforeend", " Gateway To Freedom");
//   }, 4000);
//   setTimeout(() => {
//     bootScreen.classList.add("hidden");
//     content.classList.remove("removed");
//     expectations.classList.remove("removed");
//   }, 5000);
//   setTimeout(() => {
//     shabby.classList.remove("hidden");
//     shabby.classList.add("shabbyfade");
//   }, 4500);
// })();

//Homescreen animations

setTimeout(() => {
  textBox.classList.remove("hidden");
}, 12000);

setTimeout(() => {
  line1.classList.remove("hidden");
  line1.classList.add("line-fade");
}, 14000);

setTimeout(() => {
  line2.classList.remove("hidden");
  line2.classList.add("line-fade");
}, 18500);

setTimeout(() => {
  line3.classList.remove("hidden");
  line3.classList.add("line-fade");
}, 23000);

setTimeout(() => {
  buttonBox.classList.remove("hidden");
}, 26000);
