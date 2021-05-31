const toDetails = document.querySelector('.toDetails');

function toDetailsPage(){
    window.location.href = "http://localhost:4000/";
}

toDetails.addEventListener('click', toDetailsPage);