// Functionality to add FAQ Accordion and make the list responsive

const firstCard = document.querySelector('#first-card');
const accordionHeaders = document.querySelectorAll('.card-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionBody = header.nextElementSibling;
        header.classList.toggle('active');
        accordionBody.classList.toggle('active');
    });
});

/* TODO: Add a basic functionality to track a nug and log it into the Firebase Database */

