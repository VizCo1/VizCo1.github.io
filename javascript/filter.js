document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".nav-main-item");
    const items = document.querySelectorAll(".project");

    buttons[0].classList.add("active")

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const filterValue = this.getAttribute("data-filter");

            items.forEach(item => {
                const itemFilter = item.getAttribute("data-filter");
                if (filterValue === "all" || filterValue === itemFilter) {
                    item.style.display = "initial";
                } else {
                    item.style.display = "none";
                }
            });

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});