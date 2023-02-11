let timeout;

function viewProjects() {
    /*    alert("Projects will be added soon!") */
    const button = document.querySelector('button');
    button.disabled = true;
    button.textContent = "Loading Tab...";
    timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
    const button = document.querySelector('button');
    button.textContent = "View Projects";
    button.disabled = false;
    window.location.href = 'https://mythicaltrashcan.github.io/Ludos/Ludos-Projects/';
}

function error404() {
    window.open("https://mythicaltrashcan.github.io/Ludos/noload.html");
}

function pageLoadFail() {
    const button = document.querySelector('button');
    button.disabled = true;
    button.textContent = "Loading Tab...";
    timeout = setTimeout(error404, 4000);
}