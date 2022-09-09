let timeout;

function myFunction() {
/*    alert("Projects will be added soon!") */
    const button = document.querySelector('button')
    button.disabled = true
    timeout = setTimeout(alertFunc, 5000);
}

function alertFunc() {
window.close();
window.open("https://mythicaltrashcan.github.io/stard/stard-projects/index.html");
}
