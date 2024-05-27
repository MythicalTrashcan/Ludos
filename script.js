function viewProjects() {
    const button = document.querySelector('button');
    button.disabled = true;
    window.location.href = './projects/';
}

// Social Links

function openRevolt() {
    const Revolt = document.querySelector('revolt');
    window.open("https://app.revolt.chat/invite/YPnCttyS/");
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

window.addEventListener("load", () => {
	new ServerEmbed(document.getElementById("embed"), "35%").ping("wss://mc.theludos.com", "Myth's EagMP" , "true" , "" , "hideCracked");
});

/* Work on later (eh, not really used in the new setup rn)

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