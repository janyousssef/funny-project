window.addEventListener("DOMContentLoaded", (event) => {
    var changer = document.getElementById("color-changer-id");
    var image = document.getElementById("rotating-img-id");
    changer.addEventListener("mouseenter", e => enter(e))
    changer.addEventListener("mouseleave", leave)


    function enter(event) {
        changer.addEventListener("mousemove", e => move(e))
    }
    function leave() {
        image.style.rotate = "initial";
        image.style.scale = "initial";
        image.style.transform = "initial";
        changer.removeEventListener("mousemove", move, true);
    }
    function move(e) {
        const rotation = ((e.clientX + e.clientY) % 255);
        image.style.rotate = ""+rotation+"deg";

        const scale = e.clientY / window.innerWidth * 5;
        image.style.transform = `scale(${scale})`;
    }
});