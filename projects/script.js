function returnHome() {
    const button = document.querySelector('button');
    button.disabled = false;
    window.location.href = '../';
}

function openAbout() {
    const About = document.querySelector('about');
    window.location.href = '../about-me/';
}