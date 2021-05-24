const need = document.querySelector('.need');
const supplier = document.querySelector('.supplier');




function toNeedPage(){
    window.location.href = "need.html";
}
function toSupplierPage(){
    window.location.href = "supplier.html";
}



need.addEventListener('click', toNeedPage);
supplier.addEventListener('click', toSupplierPage);
