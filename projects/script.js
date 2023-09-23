function returnHome() {
    const button = document.querySelector('button');
    button.disabled = false;
    window.location.href = 'https://theludos.com/';
}

function openAbout() {
    const About = document.querySelector('about');
    window.location.href = 'https://theludos.com/about-me/index.html';
}

window.addEventListener("load", () => {
	new ServerEmbed(document.getElementById("embed"), "35%").ping("wss://mc.theludos.com", "" , "" , "" , "hideCracked");
});