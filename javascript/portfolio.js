const projectButton01 = document.getElementById("project-button-01");
const projectButton02 = document.getElementById("project-button-02");
const popupContainer = document.getElementById("video-popup-container");

projectButton01.onclick = function() {showVideoPopup();};

function showVideoPopup() {
  popupContainer.style.display = "flex";
};