function test1 (pass1 = 'password') {
    let newArr = pass1.split('');
    let itemA = newArr.splice(1, 1)[0];
    newArr.splice(3, 0, itemA);
    let itemW = newArr.splice(4, 1)[0];
    newArr.splice(0, 0, itemW);
    let itemO = newArr.splice(5, 1)[0];
    newArr.splice(7, 0, itemO);
    let itemD = newArr.splice(6, 1)[0];
    newArr.splice(1, 0, itemD);
    return newArr.join('');
}

function test2 (pass2 = 'password') {
    const okPassWord = test1(pass2).split('');
    let newArr2 = [...okPassWord];
    let itemP = newArr2.splice(2, 1)[0];
    newArr2.splice(0, 0, itemP);
    let itemA = newArr2.splice(5, 1)[0];
    newArr2.splice(1, 0, itemA);
    let itemW = newArr2.splice(2, 1)[0];
    newArr2.splice(4, 0, itemW);
    let itemD = newArr2.splice(2, 1)[0];
    newArr2.splice(5, 0, itemD);
    let itemO = newArr2.splice(7, 1)[0];
    newArr2.splice(5, 0, itemO);
    let itemR = newArr2.splice(7, 1)[0];
    newArr2.splice(6, 0, itemR);
    let itemS = newArr2.splice(4, 1)[0];
    newArr2.splice(3, 0, itemS);
    return newArr2.join('');
}

function test (inputPassword) {
    const result1 = test1(inputPassword);
    const result2 = test2(inputPassword);
    if(result1 === result2) {
        return 'Пароль подошел!'
    } else {
        return 'Вы ввели неправильный пароль!'
    }
}

const inputPassword = 'password';
console.log(test(inputPassword));

