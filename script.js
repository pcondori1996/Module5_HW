


//Time and Day updater Interval Using Momennt.js
var timerUpdater = setInterval(() => {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $('#currentDayOfWeek').text(moment().format('dddd'))
}, 1000);

// adding date and live clock to header
//var dailyClock = setInterval(() => {
 //   $('#currentDay').text(moment().format('ddd MM/DD - hh:mm:ss a'))
//}, 1000);