const { text } = require("express");

let timeout;

function myFunction() {
/*    alert("Projects will be added soon!") */
    const button = document.querySelector('button');
    button.disabled = true;
    button.textContent = "Loading Tab...";
    timeout = setTimeout(alertFunc, 5000);
}

function alertFunc() {
    const button = document.querySelector('button');
    button.textContent = "View Projects";
    button.disabled = false;
    window.open("https://mythicaltrashcan.github.io/Ludos/Ludos-Projects/");
}
