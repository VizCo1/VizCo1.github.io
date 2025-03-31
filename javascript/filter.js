document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".nav-main-item");

    buttons[0].classList.add("active");
    filterProjects(buttons[0]);

    buttons.forEach(button => {
        button.onclick = function() { 
            filterProjects(button); 
        };    
    });

    function filterProjects(button) {
        const filterValue = button.getAttribute("data-filter");
        const items = document.querySelectorAll(".project");
    
        items.forEach(item => {
            const itemFilter = item.getAttribute("data-filter");

            if (filterValue === "all" || filterValue === itemFilter) {
                item.style.display = "flex";
                setTimeout(function() {
                    item.style.opacity = 1;
                }, 
                0)
            } else {
                item.style.display = "none";
                item.style.opacity = 0;
            }
        });
    
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    };
});

