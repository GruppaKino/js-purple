// Итеррации в массивах

const dataAndNumbers = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

let parts = [];

dataAndNumbers.forEach(element => {
    if (typeof element === 'string') {
        const splitParts = element.split(/[-/]/);
        if (splitParts.length > 1) {
            parts.push(splitParts);
        }
    }
})

const partsFilter = parts.flatMap(elementParts => {
    const [day, month, year] = elementParts.map(Number);
    if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
        return [[day, month, year]];
    }
    return [];
})

const partsFilterPrime = partsFilter.map(elementPartsFilter => elementPartsFilter.join('-'));

console.log(partsFilterPrime);












