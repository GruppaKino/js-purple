// Объекты
function getQueryString (obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj)
    return `// ${keys[0]}=${values[0]}&${keys[1]}=${values[1]}`;
}
const obj = {
    search: 'Вася',
    take: 10,
};
console.log(getQueryString(obj));

// или

function getQueryString1 (obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj)
    let queryString = '';

    for (let i = 0; i < keys.length; i++) {
        queryString += `${keys[i]}=${values[i]}`;
        if (i < keys.length - 1) {
            queryString += '&';
        }
    }
    return queryString;
}
const obj1 = {
    search: 'Вася',
    take: 10,
};

// console.log(getQueryString1(obj1));

