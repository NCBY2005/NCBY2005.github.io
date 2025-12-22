const menuBtn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay-menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
  overlay.style.width = "100%";
});

closeBtn.addEventListener('click', () => {
  overlay.style.width = "0%";
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const overlay = document.getElementById("overlay-menu");
  const closeBtn = document.getElementById("close-btn");

  menuBtn.addEventListener("click", () => {
    overlay.style.width = "100%";
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.width = "0%";
  });
});

document.querySelectorAll(".overlay-content a").forEach(link => {
  link.addEventListener("click", () => {
    overlay.style.width = "0%";
  });
});
