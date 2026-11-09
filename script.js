function clickButton() {
    window.location.href = "turn-on.html";

}
const box = document.getElementById("Payment");
const offSound = new Audio("soundd.mp3");
function clickButtonOff() {
    if (box) {
        box.style.display = "block";
        box.classList.remove("shake");
        void box.offsetWidth; // forces the browser to replay the animation
        box.classList.add("shake");
    }
        if (offVideo) {
        offVideo.currentTime = 0;
        offVideo.play();
    }
}
const payBtn = document.getElementById("payBtn");
const payMsg = document.getElementById("pay");
function clickButtonPay() {
    if (payMsg) {
        if (payMsg.style.display === "none" || payMsg.style.display === "") {
            payMsg.style.display = "block";
        } else {
            payMsg.style.display = "none";
        }
    }
}

if (payBtn) {
    payBtn.addEventListener("click", clickButtonPay);
}
const onbtn = document.getElementById("toggleButton");
if(onbtn){
onbtn.addEventListener("click", clickButton);

}
const offbtn = document.getElementById("toggleButtonOff");
if(offbtn){
offbtn.addEventListener("click", clickButtonOff);

}
