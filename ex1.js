function convertValue(number) {
    if(number % 3 == 0 && number % 5 == 0) {
        return 'Visual Nuts';
    } else if(number % 3 == 0) {
        return 'Visual';
    } else if(number % 5 == 0) {
        return 'Nuts';
    } else {
        return number;
    }
}

function ex1(maxNumber) {
    for(let i = 1; i <= maxNumber; i++) {
        console.log(convertValue(i));
    }
}

ex1(100);

module.exports = convertValue;