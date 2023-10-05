let date = document.querySelector('#date');
let day = document.querySelector('#day');
let month = document.querySelector('#month');
let year = document.querySelector('#year');

let current = new Date();

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let cDate = current.getDate();

date.innerHTML = cDate < 10 ? '0' + cDate : cDate;
day.innerHTML = days[current.getDay()];
month.innerHTML = months[current.getMonth()];
year.innerHTML = current.getFullYear();
