function setActive(element) {
    var sections = document.querySelectorAll('.nav-bar .aa');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    var parentDiv = element.parentNode;
    parentDiv.classList.add('active');
}

document.querySelector('.navbar__toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});