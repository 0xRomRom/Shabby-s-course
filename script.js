"use strict";

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const textBox = document.querySelector(".header-text-box");

setTimeout(() => {
  textBox.classList.remove("hidden");
}, 3500);

setTimeout(() => {
  line1.classList.remove("hidden");
}, 4500);

setTimeout(() => {
  line2.classList.remove("hidden");
}, 8500);

setTimeout(() => {
  line3.classList.remove("hidden");
}, 11500);
