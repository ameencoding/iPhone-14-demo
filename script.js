"use strict";

const date = new Date();
const min = date.getMinutes();
const hour = date.getHours();

const label = (document.querySelector(".date").textContent = `${hour}:${min}`);

const facebook = document.querySelector(".facebook");
const fbIcon = document.querySelector(".fb");
const swap = document.querySelector(".swap");

fbIcon.addEventListener("click", function () {
  facebook.classList.remove("hide");
});

swap.addEventListener("click", function () {
  facebook.classList.add("hide");
});
