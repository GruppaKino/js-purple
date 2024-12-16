const res1 = function() {
    const passWord = 'password';
    const resPassWord = passWord.split('');
    resPassWord[3] = 'p';
    resPassWord[0] = 's';
    resPassWord[1] = 'w';
    resPassWord[4] = 'a';
    resPassWord[7] = 'r';
    resPassWord[6] = 'd';
    return resPassWord.join('');
}

const res2 = function() {
    const okPassWord = res1().split('');
    okPassWord[0] = 'p';
    okPassWord[3] = 's';
    okPassWord[4] = 'w';
    okPassWord[1] = 'a';
    okPassWord[6] = 'r';
    okPassWord[7] = 'd';
    return okPassWord.join('');
}

function test (fn1, fn2) {
    if(fn1 === fn2) {
        return 'Пароль подошел!'
    } else {
        return 'Вы ввели неправильный пароль!'
    }
}

console.log(test(res1(), res2()));

// console.log(res1());
// console.log(res2());