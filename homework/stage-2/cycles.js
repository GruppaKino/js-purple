'use strict';

let j = 0;
function getRandomInteger(arr, sortOrder) {
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (sortOrder === 'asc') {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            } else {
                if (arr[i] < arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}

console.log(getRandomInteger([1, 40, -5, 10, 0], 'asc'));
    
    
