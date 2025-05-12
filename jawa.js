//toggle active

const navbarnav = document.querySelector(".navbar-nav");

//muncul
document.querySelector("#hambergermenu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//Klik di luar navbar untuk hilang
const menu = document.querySelector("#hambergermenu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
