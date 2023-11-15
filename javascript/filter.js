const buttons = document.querySelectorAll('#project-filters button');
const projects = document.querySelectorAll('.project-wrapper article');
document.addEventListener('DOMContentLoaded', function () {

    // Initial filtering to show only the 'All' category
    projects.forEach(project => {
        project.style.display = 'flex';
    });

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');

            projects.forEach(project => {
                if (filterValue === 'all' || project.classList.contains(filterValue)) {
                    project.style.display = 'flex';
                } else {
                    project.style.display = 'none';
                }
            });

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});