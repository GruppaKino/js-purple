

function cardProtact (num = '4561-1213-4367-2612') {
    const cardFilter = num.replace(/[^\d]/g, '');

    if (cardFilter.length === 16) {
        const cardArr = cardFilter.split('');
        for (let i = 0; i < cardArr.length; i++) {
            if (i % 2 === 0) {
                let num = parseInt(cardArr[i])
                num *= 2;
                if (num > 9) {
                    num -= 9;
                }
                cardArr[i] = num.toString();
            }
        }
        const sum = cardArr.reduce((acc, operant) => acc + parseInt(operant), 0)
        if (sum % 10 === 0) {
            return true;
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(cardProtact('4561-1213-4367-2612'));