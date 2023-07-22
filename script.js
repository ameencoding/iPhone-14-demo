"use strict";

const date = new Date();
const min = date.getMinutes();
const hour = date.getHours();

const label = (document.querySelector(".date").textContent = `${hour}:${min}`);
