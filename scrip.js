//**Boton dark and light**//

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
    // this.classList.toggle("bi-brightness-high-fill");
    // console.log(this.className);
    if (localStorage.getItem("theme") === "light") {
        body.style.background = "rgb(25, 23, 23)";
        body.style.color = "white";
        body.style.transition = "0.7s";
        localStorage.setItem("theme", "dark");
        toggle.classList.remove(...toggle.classList);
        toggle.classList.add("bi-brightness-high-fill");
        toggle.classList.add("bi");

        // toggle.classList.add("bi-moon");
    } else {
        body.style.background = "lightgrey";
        body.style.color = "black";
        body.style.transition = "0.7s";
        localStorage.setItem("theme", "light");
        toggle.classList.remove(...toggle.classList);
        toggle.classList.add("bi-moon");
        // toggle.classList.add("bi-brightness-high-fill");
        // toggle.classList.add("bi");
    }
});

//**Captura la ip de la PC **//

window.addEventListener("DOMContentLoaded", (event) => {
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
        body.style.background = "rgb(25, 23, 23)";
        body.style.color = "white";
        body.style.transition = "0.7s";
        toggle.classList.remove(...toggle.classList);
        toggle.classList.add("bi-brightness-high-fill");
        toggle.classList.add("bi");
    } else if (theme === "light") {
        body.style.background = "lightgrey";
        body.style.color = "black";
        body.style.transition = "0.7s";
        toggle.classList.remove(...toggle.classList);
        toggle.classList.add("bi-moon");
    } else if (!theme) {
        localStorage.setItem("theme", "dark");
    }
});
