window.addEventListener("DOMContentLoaded", (event) => {
    var changer = document.getElementById("color-changer-id");
    const audio = new Audio("./yesyes.mp3");
    changer.addEventListener("mouseenter", enter)
    changer.addEventListener("mouseleave", leave)


    function enter() {
        audio.play();
    }
    function leave() {
        audio.pause();
    }

});