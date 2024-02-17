const video=document.getElementById("video");const overlay=document.getElementById("overlay");const acceptButton=document.getElementById("accept-button"); declineButton=document.getElementById("decline-button");let hasClicked;window.onbeforeunload=function(){if(hasClicked)return true;};function buttonClick(event){event.preventDefault();if(!hasClicked)hasClicked=true;overlay.classList.add("hidden");video.play();videoClick();}
function videoClick(event){if(event)event.preventDefault();const{documentElement}=document;}
acceptButton.addEventListener("click",buttonClick);declineButton.addEventListener("click",buttonClick);video.addEventListener("click",videoClick);

function sui() {
    window.alert("İşe yaramadı! Çerezleri kabul etmelisin.");

}