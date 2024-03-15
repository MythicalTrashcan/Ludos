let timeout;

function viewProjects() {
    /*    alert("Projects will be added soon!") */
    const button = document.querySelector('button');
    button.disabled = true;
    button.textContent = "Loading Tab...";
    timeout = setTimeout(alertFunc, 1000);
    timeout = setTimeout(error404, 5000);
}

function alertFunc() {
    const button = document.querySelector('button');
    button.textContent = "View Projects";
    button.disabled = false;
    window.location.href = './projects/';
}

function error404() {
    window.location = './no-load/';
}

// Social Links

function openRevolt() {
    const Revolt = document.querySelector('revolt');
    window.open("https://app.revolt.chat/invite/YPnCttyS/");
}

function openMovies() {
    const Revolt = document.querySelector('revolt');
    window.open("https://movies.theludos.com/");
}

function openGithub() {
    const Github = document.querySelector('github');
    window.open("https://github.com/MythicalTrashcan/");
}

function openYoutube() {
    const YouTube = document.querySelector('youtube');
    window.open("https://www.youtube.com/channel/UCoXIebdrZPGGMrMYVKQpRLg/");
}

function openAbout() {
    const About = document.querySelector('about');
    window.location.href = './about-me/';
}

function selectMirror() {
    const About = document.querySelector('mirror');
    window.location.href = './mirrorLinks.html';
}

/* Work on later

/*
var styles = [{ transform: 'scaleX(.95) scaleY(.95) rotate(3deg)' }, { transform: 'scaleX(.95) scaleY(.95) rotate(-3deg)' }];

function changeStyle() {
    var randomIndex = Math.floor(Math.random() * styles.length);
    var selectedStyle = styles[randomIndex];

    var button = document.getElementById('button');
    for (var property in selectedStyle) {
        button.style[property] = selectedStyle[property];
    }
}
*/