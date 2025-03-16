const projectButton01 = document.getElementById("project-button-01");
const projectButton02 = document.getElementById("project-button-02");
const videoPopupContainer = document.getElementById("video-popup-container");
const videoPopup = document.getElementById("video-popup");
const videoPopupCloseButton = document.getElementById("video-popup-close-button");

const sites = ['https://www.youtube.com/embed/tgbNymZ7vqY',
  'http://gizmodo.com/',
  'http://lifehacker.com/']

videoPopupCloseButton.onclick = function() { hideVideoPopup(); }
projectButton01.onclick = function() { prepareVideoPopup(sites[0]); };
// projectButton02.onclick = function() { prepareVideoPopup(sites[0]); };
videoPopup.onload = function() { onVideoLoaded() };

document.onkeydown = function(e) { 
  if (e.key == "Escape") {
    hideVideoPopup(); 
    document.activeElement.blur(); 
  }
};

let canShowVideo = false;

function prepareVideoPopup(src) {
  videoPopup.src = src + "?autoplay=1";
  videoPopupContainer.style.visibility = "visible";
  videoPopupContainer.style.opacity = 1;
  canShowVideo = true;
};

function onVideoLoaded() {
  if (canShowVideo) {
    canShowVideo = false;
    videoPopup.style.opacity = 1;
  }
};

function hideVideoPopup() {
  videoPopupContainer.style.visibility = "hidden";
  videoPopupContainer.style.opacity = 0;
  videoPopup.style.opacity = 0;

  videoPopup.src = "";
};

