function validateCardNumber(cardNumber) {
    
    const cleanCardNumber = cardNumber.replace(/[^0-9]/g, '');

    
    if (cleanCardNumber.length === 0 || cleanCardNumber.length < 13 || cleanCardNumber.length > 19) {
        return false;
    }

    
    let sum = 0;
    let shouldDouble = false;

    
    for (let i = cleanCardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanCardNumber[i]);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble; 
    }

    
    return sum % 10 === 0;
}

// Пример использования
console.log(validateCardNumber("4561-1213-4367-2612")); 
console.log(validateCardNumber("1234-5678-9876-5432")); 
