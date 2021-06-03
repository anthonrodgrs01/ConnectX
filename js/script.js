var need = document.querySelector('.need');
var supply = document.querySelector('.supplier');


need.addEventListener('click', function(){
    window.location.href = "http://localhost:5000/";
});

supply.addEventListener('click', function(){
    window.location.href = "http://localhost:4000/";
});
