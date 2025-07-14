const buttons = document.querySelectorAll(".nav-main-item");

document.addEventListener("DOMContentLoaded", function () {
    buttons[0].classList.add("active");
    
    buttons.forEach(button => {
        button.onclick = function() { 
            filterProjects(button); 
        };    
    });
});

window.addEventListener("load", (event) => {
    filterProjects(buttons[0]);
});

function filterProjects(button) {
        const filterValue = button.getAttribute("data-filter");
        const items = document.querySelectorAll(".project");
    
        let lastActiveIndex = -1;
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            const itemFilter = item.getAttribute("data-filter");

            if (filterValue === "all" || filterValue === itemFilter) {
                item.style.display = "flex";
                lastActiveIndex = i;

                var carousel = item.querySelector(".gallery");
                var flkty = new Flickity(carousel);
                flkty.resize();

                setTimeout(function() {
                    item.style.opacity = 1;
                }, 
                0)
            } else {
                item.style.display = "none";
                item.style.opacity = 0;
                item.classList.remove("last-visible-project");
            }
        }

        items.item(lastActiveIndex).classList.add("last-visible-project");
    
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    };