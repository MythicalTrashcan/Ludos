let timeout;

function viewProjects() {
    /*    alert("Projects will be added soon!") */
    const button = document.querySelector('button');
    button.disabled = true;
    button.textContent = "Loading Tab...";
    timeout = setTimeout(alertFunc, 1000);
    timeout = setTimeout(error404, 2000);
}

function alertFunc() {
    const button = document.querySelector('button');
    button.textContent = "View Projects";
    button.disabled = false;
    window.location.href = 'https://mythicaltrashcan.github.io/Ludos/Ludos-Projects/';
}

function error404() {
    window.location.href = 'https://mythicaltrashcan.github.io/Ludos/No-Load/index.html';
}