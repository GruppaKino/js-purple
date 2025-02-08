//Домашее задание на тему Функций

function currencyConversion (sum, reg, target) {
    const rubToDollar = 102.91,
        rubToEUR = 108.7,
        rubToCNY = 13.86;

    if (reg === 'Рубль' && target === 'Доллар'){
        return `Рубль к Доллару на 16.12.2024 составялет ${(sum / rubToDollar).toFixed(2)}`
    } else if (reg === 'Рубль' && target === 'Евро'){
        return `Рубль к Евро на 16.12.2024 составялет ${(sum / rubToEUR).toFixed(2)}`
    } else if (reg === 'Рубль' && target === 'Юань'){
        return `Рубль к Юаням на 16.12.2024 составялет ${(sum / rubToCNY).toFixed(2)}`
    } else {
        return 'Данные валюты пока не поддерживаются!'
    }
}

console.log(currencyConversion(1000, 'Рубль', 'Юань'))