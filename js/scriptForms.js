const toDetails = document.querySelector('.toDetails');

function toDetailsPage(){
    window.location.href = "http://localhost:3000/";
}

toDetails.addEventListener('click', toDetailsPage);