/* ---------- HAMBURGER ---------- */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

/* ---------- ITEM POPUP ---------- */
const popupOverlay = document.getElementById("popupOverlay");
const popupTitle = document.getElementById("popupTitle");
const popupClose = document.getElementById("popupClose");

document.querySelectorAll(".card-clickable").forEach(card => {
    card.addEventListener("click", () => {
        const name = card.dataset.name;
        popupTitle.textContent = name;
        popupOverlay.classList.add("open");
    });
});

popupClose.addEventListener("click", () => {
    popupOverlay.classList.remove("open");
});

popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove("open");
    }
});
