// quantity increasing-decreasing function
function updateProductNumber(product, price, isIncreaseing) {
    const productInput = document.getElementById(product + '-quantity');
    let productNumber = productInput.value;
    if (isIncreaseing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // product total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    updateTotalPrice()
};

// getting product quantity 
function getInputValues(product) {
    const productInput = document.getElementById(product + '-quantity');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

//update total price
function updateTotalPrice() {
    const phoneTotal = getInputValues('phone') * 1219;
    const caseTotal = getInputValues('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    // update total in html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
};

// phone quantity increasing event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

// phone quantity decreasing event
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

// case quantity increasing event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

// case quantity decreasing event
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});



