// alert( null || 2 || undefined ); //2
// alert( alert(1) || 2 || alert(3) ); // 1 2
// alert( 1 && null && 2 ); // null
// alert( alert(1) && alert(2) ); // 1 undefind
// alert( null || 2 && 3 || 4 ); //3
// let value = NaN;
//
// value &&= 10;  //value && (value = 10)
// value ||= 20;
// value &&= 30;
// value ||= 40;
//
// alert(value); //30
// if (!(age >= 14 && age <=90)); //without =
// if ((age < 14 && age >90));
//
// if (-1 || 0) alert( 'first' ); //true
// if (-1 && 0) alert( 'second' ); //false
// if (null || -1 && 1) alert( 'third' ); //true

const name = prompt('Add name', '')

if (name === 'Админ') {
    const passwort = prompt('Add password', '')
    if (passwort === 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (passwort === '' || passwort === null) {
        alert( 'Отменено' );
    } else {
        alert('Неверный пароль')
    }
 } else if (userName === '' || userName === null) {
    alert('Отменено')
} else  {
    alert('Я вас не знаю')
}