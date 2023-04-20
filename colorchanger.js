window.addEventListener("DOMContentLoaded", (event) => {
    var changer = document.getElementById("color-changer-id");
    var text = document.getElementById("title-text");

    changer.addEventListener("mouseenter", e => enter(e))
    changer.addEventListener("mouseleave", leave)


    function enter(event) {
        changer.addEventListener("mousemove", e => move(e))
    }
    function leave() {
        changer.style.backgroundColor = "rgb(0,0,0)";
        text.style.backgroundColor = "rgb(0,0,0)";
        changer.removeEventListener("mousemove", move, true);
    }
    function move(e) {
        const r = e.clientX * 1 % 255;
        const g = e.clientY * 2 % 255;
        const b = e.clientX * 3 % 255;
        changer.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        text.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        
    }
});