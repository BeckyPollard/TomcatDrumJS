function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const cat = document.getElementById("tomcat").src;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    document.getElementById("tomcat").src="./images/drum2.jpg";
    console.log("oh god");
}
function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}
function cat(e){
    document.getElementById("tomcat").src="./images/drum1.jpg";
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playsound);
window.addEventListener("keyup", cat);