// let d = new Date(2012, 1, 20, 3, 12);


// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//
//     return days[date.getDay()];
// }
//
// let date = new Date(2014, 0, 3);
// function getLocalDay(date) {
//
//     let day = date.getDay();
//
//     if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
//         day = 7;
//     }
//
//     return day;
// }

// function getDateAgo(date, days) {
//     let myDate = new Date(date);
//     let calculateDate = myDate.setDate(date.getDate() - days)
//
//     return calculateDate.getDate();
// }
//
// let date = new Date(2015, 0, 2);
//
// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }

// function getSecondsToday() {
//     let d = new Date();
//     return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
// }

// function getSecondsToTomorrow() {
//     let now = new Date();
//
//     let nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//
//     let diff = nextDay - now;
//     console.log(diff)
//     return Math.round(diff / 1000);
// }
//
// console.log(getSecondsToTomorrow())

function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return 'прямо сейчас';
    }

    let sec = Math.floor(diff / 1000);

    if (sec < 60) {
        return sec + ' сек. назад';
    }

    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + ' мин. назад';
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date - 86400 * 1000)))