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
  line1.classList.add("line-fade");
}, 4500);

setTimeout(() => {
  line2.classList.remove("hidden");
  line2.classList.add("line-fade");
}, 8500);

setTimeout(() => {
  line3.classList.remove("hidden");
  line3.classList.add("line-fade");
}, 13500);
