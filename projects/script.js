function returnHome() {
    const button = document.querySelector('button');
    button.disabled = false;
    window.location.href = 'https://theludos.com/';
}

function openAbout() {
    const About = document.querySelector('about');
    window.location.href = 'https://theludos.com/about-me/index.html';
}