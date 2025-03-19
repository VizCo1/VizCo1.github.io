const projectButton01 = document.getElementById("project-button-01");
const projectButton02 = document.getElementById("project-button-02");
const videoPopupContainer = document.getElementById("video-popup-container");
const videoPopup = document.getElementById("video-popup");
const videoPopupCloseButton = document.getElementById("video-popup-close-button");
const videoPopupLoadingContainer = document.getElementById("video-popup-loading-container");
const projectButtons = document.querySelectorAll(".project-video-button");

const sites = [
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/Trxwwlbqskw",
  "https://gomezjuanjose.github.io/",
  "https://sadrmm.github.io/Portfolio/"]

for (let i = 0; i < projectButtons.length; i++) {
  let button = projectButtons[i];
  button.onclick = function() { prepareVideoPopup(sites[i]) };
}
  
let canShowVideo = false;

videoPopupCloseButton.onclick = function() { hideVideoPopup(); };
videoPopup.onload = function() { onVideoLoaded() };

document.onkeydown = function(e) { 
  if (e.key == "Escape") {
    hideVideoPopup(); 
    document.activeElement.blur(); 
  }
};

function prepareVideoPopup(src) {
  videoPopup.src = src + "?autoplay=1";
  videoPopupLoadingContainer.style.display = "inherit";
  videoPopupContainer.style.visibility = "visible";
  videoPopupContainer.style.opacity = 1;
  canShowVideo = true;
};

function stopLoadingIcon() {
  videoPopupLoadingContainer.style.display = "none";
}

function onVideoLoaded() {
  if (canShowVideo) {
    canShowVideo = false;
    stopLoadingIcon();
    videoPopup.style.opacity = 1;
  }
};

function hideVideoPopup() {
  videoPopupContainer.style.visibility = "hidden";
  videoPopupContainer.style.opacity = 0;
  videoPopup.style.opacity = 0;
  videoPopup.src = "";
};