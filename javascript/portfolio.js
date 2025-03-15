const projectButton01 = document.getElementById("project-button-01");
const projectButton02 = document.getElementById("project-button-02");
const popupContainer = document.getElementById("video-popup-container");
const popupCloseButton = document.getElementById("video-popup-close-button");

popupCloseButton.onclick = function() { hideVideoPopup(); }
projectButton01.onclick = function() {showVideoPopup();};
document.onkeydown = function(){ hideVideoPopup(); document.activeElement.blur(); };

function showVideoPopup() {
  popupContainer.style.display = "flex";
};

function hideVideoPopup() {
  popupContainer.style.display = "none";
};

