import getProjects from "./getProjects.js";

document.querySelectorAll('.category-options .c').forEach(category => {
    category.addEventListener('click', e => {

        document.querySelectorAll('.category-options .c')
            .forEach(category => category.classList.remove('selected'));

        e.currentTarget.classList.add('selected');

        showProjects(e.currentTarget.id);
    });
});

function showProjects(category) {
    document.querySelector('.projects .items').innerHTML = '';

    getProjects(category).forEach(project =>
        document.querySelector('.projects .items').append(buildProjectView(project)));
}

function buildProjectView(data) {
    const pItem = document.querySelector('.models .project-item').cloneNode(true);

    pItem.querySelector('.name').innerText = data.name;

    if (!data.image) pItem.querySelector('img').remove();
    else pItem.querySelector('img').src = data.image;

    pItem.querySelector('.info').innerText = data.about;
    pItem.querySelector('#viewCode').href = data.repository;

    if (!data.url) pItem.querySelector('#access').remove();
    else pItem.querySelector('#access').href = data.url;

    return pItem;
}

function init() {
    document.querySelector('.category-options #frontend').classList.add('selected');
    showProjects('frontend');
}
init();