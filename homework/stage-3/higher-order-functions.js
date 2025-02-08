// Функции высшего порядка

function delitArr (arr) {
    return function filterArr () {
        let arr2 = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 5) {
                arr2.push(arr[i]);
            }
        }
        return arr2;
    }
}

const filteredArrFunc = delitArr([4, 7, 3, 1, 8, 2,]);
console.log(filteredArrFunc());