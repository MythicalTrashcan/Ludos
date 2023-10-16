let timeout;

function returnMain() {
    window.location.href = '../';
}

function openRevolt() {
    const About = document.querySelector('revolt');
    window.location.href = 'https://app.revolt.chat/invite/qRRSQT80';
}

function downloadLudos() {
    const Ludos = document.querySelector('ludos');
    window.open("https://gitlab.com/MythicalTrashcan/ludos-offline-edition-download/-/archive/main/ludos-offline-edition-download-main.zip");
}

function openGithub() {
    const Github = document.querySelector('github');
    window.open("https://github.com/MythicalTrashcan/");
}

function openYoutube() {
    const YouTube = document.querySelector('youtube');
    window.open("https://www.youtube.com/channel/UCoXIebdrZPGGMrMYVKQpRLg");
}

function openAbout() {
    const About = document.querySelector('about');
    window.location.href = './about-me/';
}