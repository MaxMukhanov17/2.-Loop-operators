const catalog = {
    1: {
        id: 1,
        name: 'Iphone 12',
        description: 'Память 64 gb',
        colour: ['Синий', 'Красный', 'Зеленый', 'Черный', 'Белый'],
        price: 65000,
        available: 'В наличии',
    },
    2: {
        id: 2,
        name: 'Iphone 11',
        description: 'Память 128 gb',
        colour: [ 'Зеленый', 'Черный', 'Белый'],
        price: 35000,
        available: 'В наличии',
    },
    3: {
        id: 7,
        name: 'Iphone 13',
        description: 'Память 64 gb',
        colour: ['Зеленый', 'Черный', 'Белый', 'Синий', 'Лавандовый'],
        price: 72000,
        available: 'В наличии',
    },
    4: {
        id: 4,
        name: 'Samsung Galaxy S22',
        description: 'Память 128 gb',
        colour: [ 'Черный', 'Белый', 'Синий', 'Розовый'],
        price: 69990,
        available: 'В наличии',
    },
    5: {
        id: 5,
        name: 'Samsung Galaxy S22',
        description: 'Память 128 gb',
        colour: [ 'Черный', 'Белый', 'Синий', 'Розовый'],
        price: 67990,
        available: 'В наличии',
    },
};

const basket = [
    {
        goodId: 3,
        amount: 7,
    },
    {
        goodId: 1,
        amount: 3,
    },
];


function addProduct(catalog) {
    for (var catalogInd in catalog) {
        var product = catalog[catalogInd]
        var productId = product.id

        if (productId === 7) {
           basket.push({
            goodId: productId,
            amount: 6,
        })
        }
    }
    return(basket)
};


function removeProduct(goodIndex, amount) {
    for(let i = 0; i < basket.length; i++) {
        if (basket[i].good == goodIndex) {
            if (amount >= basket[i].amount) {
                basket.splice(i, 1);
                return;
            } 
            basket[i].amount -= amount;
        }    
    }
    return basket
}



function clearBasket(basket) {
    basket.splice(0, basket.length);
    return basket
}


function quantityAndCost (basketQua, catalogPrice) {
    let sumAmount = 0
    let sumPrice = 0
    // общее количество
    for (var productQua in basketQua){
        var amountProduct = basketQua[productQua].amount
        sumAmount += amountProduct
        var goodIdBask = basketQua[productQua].goodId

        for (var catalogProduct in catalogPrice) {
            if (goodIdBask == catalogProduct){
                var productPrice = catalogPrice[catalogProduct].price
                var priceProdBasket = productPrice * amountProduct
                sumPrice += priceProdBasket
            }
        }
    }
    var quanCost = {
        totalAmount: sumAmount,
        totalSumm: sumPrice,
    }
    return(quanCost) 
};



addProduct(catalog)
removeProduct(basket)
clearBasket(basket)
quantityAndCost(basket, catalog)