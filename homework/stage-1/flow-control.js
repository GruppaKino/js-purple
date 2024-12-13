// Домашнее задание на тему "Управление потоком"

const languages = prompt('Давайте определимся! На каком языке Вам удобно вести диалог?')

switch (languages) {
    case 'English':
        alert("OK, I've identified your language as English")
        break;
    case 'Русский':
        alert('Хорошо, я определил Ваш языка как Русский');
        break;
    case '日本語':
        alert('さて、私はあなたの言語を日本語として特定しました');
        break;
    case 'Español':
        alert('Ok, he definido Su idioma como Español');
        break;
    case 'Italiano':
        alert('Ok, ho definito la tua lingua Come Italiano');
        break;
    default:
        alert("You didn't enter the message!")
        break;
}