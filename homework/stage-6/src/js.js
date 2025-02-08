function getRes () {
    document.querySelector('#operators-plus').addEventListener('click', function () {
        const res1 = document.getElementById('number1').value;
        const res2 = document.getElementById('number2').value;

        if (isNaN(res1) || isNaN(res2)) {
            alert('Ошибка! Введите число!')
            return false
        } else if (res1 < 0 || res2 < 0) {
            alert('Простите, но числа должны быть положительными!')
            return false
        } else if (res1 === '' || res2 === '') {
            alert('Вы не ввели значение!')
            return false
        }

        document.getElementById('res').value = Number(res1) + Number(res2);
        document.getElementById('number1').value = ''
        document.getElementById('number2').value = ''
    })

    document.querySelector('#operators-minus').addEventListener('click', function () {
        const res1 = document.getElementById('number1').value;
        const res2 = document.getElementById('number2').value;

        if (isNaN(res1) || isNaN(res2)) {
            alert('Ошибка! Введите число!')
            return false
        } else if (res1 < 0 || res2 < 0) {
            alert('Простите, но числа должны быть положительными!')
            return false
        } else if (res1 === '' || res2 === '') {
            alert('Вы не ввели значение!')
            return false
        }

        document.getElementById('res').value = Number(res1) - Number(res2);
        document.getElementById('number1').value = ''
        document.getElementById('number2').value = ''
    })

    document.querySelector('#operators-multiply').addEventListener('click', function () {
        const res1 = document.getElementById('number1').value;
        const res2 = document.getElementById('number2').value;

        if (isNaN(res1) || isNaN(res2)) {
            alert('Ошибка! Введите число!')
            return false
        } else if (res1 < 0 || res2 < 0) {
            alert('Простите, но числа должны быть положительными!')
            return false
        } else if (res1 === '' || res2 === '') {
            alert('Вы не ввели значение!')
            return false
        }

        document.getElementById('res').value = Number(res1) * Number(res2);
        document.getElementById('number1').value = ''
        document.getElementById('number2').value = ''
    })

    document.querySelector('#operators-division').addEventListener('click', function () {
        const res1 = document.getElementById('number1').value;
        const res2 = document.getElementById('number2').value;
        
        if (isNaN(res1) || isNaN(res2)) {
            alert('Ошибка! Введите число!')
            return false
        } else if (res1 < 0 || res2 < 0) {
            alert('Простите, но числа должны быть положительными!')
            return false
        } else if (res1 === '' || res2 === '') {
            alert('Вы не ввели значение!')
            return false
        }

        document.getElementById('res').value = Number(res1) / Number(res2);
        document.getElementById('number1').value = ''
        document.getElementById('number2').value = ''
    })
}

getRes();

