function shufflePassword(pass = 'password') {
    if (typeof pass !== 'string') {
        return 'Некорректный формат пароля!';
    }

    const newArr = pass.split('');
    
    
    const evenChars = [];
    const oddChars = [];

    for (let i = 0; i < newArr.length; i++) {
        if (i % 2 === 0) {
            evenChars.push(newArr[i]); 
        } else {
            oddChars.push(newArr[i]);
        }
    }

    
    return evenChars.join('') + oddChars.join('');
}

function shufflePasswordBack(pass = 'password') {
    if (typeof pass !== 'string') {
        return 'Некорректный формат пароля!';
    }

    const newArr = pass.split('');

    
    const evenChars = [];
    const oddChars = [];

    for (let i = 0; i < newArr.length; i++) {
        if (i % 2 === 0) {
            evenChars.push(newArr[i]); 
        } else {
            oddChars.push(newArr[i]); 
        }
    }

    
    let restored = [];
    let evenIndex = 0;
    let oddIndex = 0;

    for (let i = 0; i < newArr.length; i++) {
        if (i % 2 === 0) {
            restored.push(evenChars[evenIndex]);
            evenIndex++;
        } else {
            restored.push(oddChars[oddIndex]);
            oddIndex++;
        }
    }

    return restored.join('');
}

function validatePassword(inputPassword) {
    if (typeof inputPassword !== 'string') {
        return 'Некорректный формат пароля!';
    }

    
    const result1 = shufflePassword(inputPassword);
    const result2 = shufflePasswordBack(result1);

    if (inputPassword === result2) {
        return 'Пароль подошел!';
    } else {
        return 'Вы ввели неправильный пароль!';
    }
}


const inputPassword = 'password';
console.log(validatePassword(inputPassword)); 



