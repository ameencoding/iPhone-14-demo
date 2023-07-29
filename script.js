"use strict";

const date = new Date();
const min = date.getMinutes().toString().padStart(2, 0);
const hour = date.getHours().toString().padStart(2, 0);

const label = (document.querySelector(".date").textContent = `${hour}:${min}`);
const facebook = document.querySelector(".facebook");
const fbIcon = document.querySelector(".fb");
const arrow = document.querySelector(".arrow-back");
const main = document.querySelector("main");
const phone = document.querySelector(".phone");
const switchBtn = document.querySelector(".switch");

fbIcon.addEventListener("click", function () {
  facebook.classList.remove("hide");
  arrow.style.visibility = "visible";
});

arrow.addEventListener("click", function (e) {
  facebook.classList.add("hide");
  setTimeout(function () {
    arrow.style.visibility = "hidden";
  }, 1000);
});

switchBtn.addEventListener("click", function () {
  if (main.classList.contains("off")) {
    main.classList.remove("off");
    main.style.display = "block";
    phone.style.backgroundImage = "url(./img/bg.jpeg)";
  } else {
    main.classList.add("off");
    main.style.display = "none";
    phone.style.backgroundImage = "none";
  }
});
