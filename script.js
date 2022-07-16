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
const addyCopied = document.querySelector(".addy-copied");

const transferSum = document.querySelector(".transfer-sum");
const transferCurrency = document.querySelector(".transfer-cur");
const blockchains = document.querySelector("#blockchains");
const addressBox = document.querySelector("#address-box");

//Initialize
expectations.style.display = "none";
instructions.style.display = "none";

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

blockchains.addEventListener("change", () => {
  switch (blockchains.value) {
    case "👇":
      transferSum.textContent = " ";
      addressBox.value = "Choose Currency";
      break;
    case "Solana":
      renderResult(solanaURL, 2);
      addressBox.value = "0x3333333333";
      break;
    case "Bitcoin":
      renderResult(bitcoinURL, 5);
      addressBox.value = "0x1111111111";
      break;
    case "Ethereum":
      renderResult(ethereumURL, 3);
      addressBox.value = "0x2222222222";
      break;
    case "Bnb":
      renderResult(BNB_URL, 2);
      addressBox.value = "0x4444444444";
      break;
    case "Avax":
      renderResult(AVAX_URL, 2);
      addressBox.value = "0x6666666666";
      break;
    case "Tether":
      transferSum.textContent = "97";
      addressBox.value = "0x5555555555";
      break;
    default:
      transferSum.textContent = " ";
      addressBox.value = "Choose Currency";
  }
  addyCopied.classList.remove("removed");
  addyCopied.classList.add("addy-animate");
  copyAddress();
  setTimeout(() => {
    addyCopied.classList.add("removed");
  }, 2000);
  transferCurrency.textContent = blockchains.value;
});

function copyAddress() {
  let copyText = document.getElementById("address-box");
  copyText.select();
  document.execCommand("copy");
}

//////////////////

const bitcoinURL = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`;
const solanaURL = `https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd`;
const ethereumURL = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`;
const BNB_URL = `https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd`;
const AVAX_URL = `https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd`;

const renderResult = async function (source, optional) {
  await fetch(source)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Can not reach CoinGecko");
      }
      return response.json();
    })
    .then((data) => {
      transferSum.textContent = (
        100 / Math.trunc(data[Object.keys(data)[0]].usd)
      ).toFixed(optional);
    });
};

//////////////////

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
