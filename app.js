function updateProductNumber(product, isIncreaseing) {
    const productInput = document.getElementById(product + '-quantity');
    let productNumber = productInput.value;
    if (isIncreaseing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

};

// phone quantity
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false);
});

// case quantity
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', false);
});



