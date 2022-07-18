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
const payForm = document.querySelector(".pay-form");
const goButton = document.querySelector(".go");
const goText = document.querySelector(".go-text");
const noButton = document.querySelector(".no");
const addyCopied = document.querySelector(".addy-copied");
const txInput = document.querySelector(".tx-input");
const emailInput = document.querySelector(".email-input");
const gotHash = document.querySelector(".got-hash");
const transferSum = document.querySelector(".transfer-sum");
const transferCurrency = document.querySelector(".transfer-cur");
const blockchains = document.querySelector("#blockchains");
const addressBox = document.querySelector("#address-box");
const formBox = document.querySelector(".form-box");
const thanksBox = document.querySelector(".thankyou");
const txError = document.querySelector(".tx-error");
const emailError = document.querySelector(".email-error");

//Initialize
expectations.style.display = "none";
instructions.style.display = "none";
payForm.style.display = "none";

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

gotHash.addEventListener("click", () => {
  payForm.style.display = "flex";
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
    case "BNB":
      renderResult(BNB_URL, 2);
      addressBox.value = "0x4444444444";
      break;
    case "AVAX":
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
function submitHandler(event) {
  event.preventDefault();
  if (emailInput.value.includes("@")) {
    emailError.classList.add("hidden");
  }
  if(txInput.value.length >= 10) {
    txError.classList.add('hidden');
  }

  if(emailInput.value.length < 5) {
    emailError.classList.remove("hidden");
    if (txInput.value.length <= 10) {
      txError.classList.remove("hidden");
      return;
    }
    return;
  }

  if (txInput.value.length <= 10) {
    txError.classList.remove("hidden");
    if (!emailInput.value.includes("@")) {
      emailError.classList.remove("hidden");
      return;
    }
    return;
  }
  txError.classList.add("hidden");
  emailError.classList.add("hidden");
  if (!emailInput.value.includes("@")) {
    emailError.classList.remove("hidden");
    if (txInput.value.length <= 10) {
      txError.classList.add("hidden");
      return;
    }
    return;
  }

  const userData = {
    hash: txInput.value,
    email: emailInput.value,
  };
  console.log(userData);
  addDataHandler(userData);
  txInput.value = " ";
  emailInput.value = " ";
  formBox.style.display = "none";
  thanksBox.style.display = "flex";
}

async function addDataHandler(input) {
  const response = await fetch(
    "https://shabby-b-default-rtdb.europe-west1.firebasedatabase.app/userData.json",
    {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
}

/////////////////

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
