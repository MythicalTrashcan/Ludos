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
    window.location.href = 'https://theludos.com/projects/';
}

function error404() {
    window.location = 'https://theludos.com/no-load/';
}

// Social Links

function openYoutube() {
    const YouTube = document.querySelector('youtube');
    window.open("https://www.youtube.com/channel/UCoXIebdrZPGGMrMYVKQpRLg");
}

function openGithub() {
    const Github = document.querySelector('github');
    window.open("https://github.com/MythicalTrashcan/");
}