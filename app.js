let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(amount){
    return amount * oneEuroIs.USD * oneEuroIs.JPY;
}

function fromEuroToDollar(amount){
    return amount * oneEuroIs.USD;
}

function fromYenToPound(amount) {
    return amount * oneEuroIs.JPY * oneEuroIs.GBP;
}

module.exports = { 
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
 }