function returnHome() {
    const button = document.querySelector('button');
    button.disabled = false;
    window.location.href = 'https://theludos.com/';
}

function openAbout() {
    const About = document.querySelector('about');
    window.location.href = 'https://theludos.com/about-me/index.html';
}

function openRevolt() {
    const About = document.querySelector('revolt');
    window.location.href = 'https://app.revolt.chat/invite/qRRSQT80';
}