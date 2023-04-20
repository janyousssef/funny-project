window.addEventListener("DOMContentLoaded", (event) => {
    var changer = document.getElementById("color-changer-id");
    var image = document.getElementById("rotating-img-id");
    var text = document.getElementById("title-text");
    
    changer.addEventListener("mouseenter", e => enter(e))
    changer.addEventListener("mouseleave", leave)


    function enter(event) {
        changer.addEventListener("mousemove", e => move(e));
        text.innerText = "What I'm Actually Listnening To:";
    }
    function leave() {
        //reset image state
        image.style.rotate = "initial";
        image.style.scale = "initial";
        image.style.transform = "initial";
        image.setAttribute("src","jan_coding.png");

        //reset text
        text.innerText = "How I Look Like When Coding:";
        //remove event handler
        changer.removeEventListener("mousemove", move, true);
    }
    function move(e) {
        //change image
        image.setAttribute("src","jan_confused.png");

        //rotate and scale
        const rotation = ((e.clientX + e.clientY) % 255);
        image.style.rotate = ""+rotation+"deg";
        const scale = e.clientY / window.innerWidth * 5;
        image.style.transform = `scale(${scale})`;
    }
});