const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon");
    if (this.classList.toggle("bi-brightness-high-fill")) {
        body.style.background = "rgb(25, 23, 23)";
        body.style.color = "white";
        body.style.transition = "2s";
    } else {
        body.style.background = "rgb(202, 202, 202)";
        body.style.color = "black";
        body.style.transition = "2s";
    }
});
