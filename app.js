const firstCard = document.querySelector('#first-card');

function createCardContent(){
    const cardDiv = document.createElement('div');
    const cardContent = document.createElement('div');
    cardDiv.classList.add = 'card-content';
    cardDiv.classList.add ="justify-content-center";
    cardDiv.classList.add ="align-items-center";
    cardContent.classList.add = 'content';
    cardContent.innerText = 'Concept of NugLog began when the love of my life was having a lot of poochie-poopies. I decided to make NugLog to allow her to track the number of daily poochies and also provide some statistical data so if there is too many poochies or not enough poochies, she can visit the local GP.   .';
    cardDiv.append(cardContent);
    firstCard.appendChild(cardDiv);
}

firstCard.addEventListener('click', () => {
    createCardContent()
    console.log('first card has been clicked')
})