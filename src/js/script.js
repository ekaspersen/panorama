import "../input.css";

const animateButton = document.getElementById("animate-button");
const overlay = document.getElementById("overlay");
const messageBox = document.getElementById("message-box");
const closeButton = document.getElementById("close-button");
const body = document.body;

animateButton.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    messageBox.classList.remove("hidden");
    body.style.height = "100vh";
    body.classList.add("overflow-hidden");
});

closeButton.addEventListener("click", () => {
    overlay.classList.add("hidden");
    messageBox.classList.add("hidden");
    body.style.height = "";
    body.classList.remove("overflow-hidden");
});

overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    messageBox.classList.add("hidden");
    body.style.height = "";
    body.classList.remove("overflow-hidden");
});
