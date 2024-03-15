function returnHome() {
    const button = document.querySelector('button');
    button.disabled = false;
    window.location.href = '../';
}

function openAbout() {
    const About = document.querySelector('about');
    window.location.href = '../about-me/';
}

window.addEventListener("load", () => {
	new ServerEmbed(document.getElementById("embed"), "35%").ping("wss://mc.theludos.com", "Myth's EagMP" , "true" , "" , "hideCracked");
});

function openRetroBowl() {
    window.location.href = localStorage.getItem("chosenLink") + "/games/bowl/";
}