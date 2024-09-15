function viewProjects() {
    window.location.href = './projects/';
}

// Social Links

function openRevolt() {
    window.open("https://app.revolt.chat/invite/YPnCttyS/");
}

function openGithub() {
    window.open("https://github.com/MythicalTrashcan/");
}

function openYoutube() {
    window.open("https://www.youtube.com/channel/UCoXIebdrZPGGMrMYVKQpRLg/");
}

function openAbout() {
    window.location.href = './about-me/';
}

function selectMirror() {
    window.location.href = './mirror-links/';
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