let names = prompt ('Введите Ваше Имя');
let birthYear = +prompt ('Введите год рождения');
let nowYear = +prompt ('Введите текущий год');

function age(birthYear, nowYear){
    let result = nowYear - birthYear;
    return result;
}
console.log( names  +',' + ' Ваш возраст ' + age(birthYear, nowYear));