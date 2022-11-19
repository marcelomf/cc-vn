function ex1(maxNumber) {
    for(let i = 1; i <= maxNumber; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('Visual Nuts');
            continue;
        } else if(i % 3 == 0) {
            console.log('Visual');
            continue;
        } else if(i % 5 == 0) {
            console.log('Nuts');
            continue;
        }
        console.log(i);
    }
}

ex1(100);