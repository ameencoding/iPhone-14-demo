"use strict";

const date = new Date();
const min = date.getMinutes().toString().padStart(2, 0);
const hour = date.getHours().toString().padStart(2, 0);

const label = (document.querySelector(".date").textContent = `${hour}:${min}`);
const facebook = document.querySelector(".facebook");
const fbIcon = document.querySelector(".fb");
const arrow = document.querySelector(".arrow-back");

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
