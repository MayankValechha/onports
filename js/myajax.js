window.addEventListener('load',init);
function init(){
    console.log('I got Loaded');
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET','user-data.json',true);
    xhr.onload = function(){
        var userData = JSON.parse(this.responseText);
        console.log(userData);
        renderData(userData);
    }
    xhr.send();
}

function renderData(userData){
    //Defining Elements
    var product = document.getElementById('product-name');
    var sellerName = document.getElementById('seller-name');
    var mrp = document.getElementById('mrp');
    var price = document.getElementById('price');
    var deliveryCharge = document.getElementById('delivery-charges');
    var deliveryMsg = document.getElementById('delivery-message');
    var productDescription = document.getElementById('product-description');
    
    //Showing Elements
    product.innerHTML = userData.productName;
    sellerName.innerHTML = userData.sellerName;
    mrp.innerHTML = 'MRP Rs. '+userData.mrp;
    price.innerHTML = 'Price Rs. '+userData.price;
    deliveryCharge.innerHTML = userData.deliveryCharge+'.00 ';  
    deliveryMsg.innerHTML = userData.deliveryMessage;
    productDescription.innerHTML = userData.productDescription;
    
    //Traversing through all productDescription and outputting it using loop.
}