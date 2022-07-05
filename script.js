
var index = 0;
var time = moment();
var container = $('.container');
var currentHour = moment().hour();



//Time and Day updater Interval Using Momennt.js
var timerUpdater = setInterval(() => {
    timerComparer();
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $('#currentDayOfWeek').text(moment().format('dddd'))
}, 1000);



var TextBoxes = ["#Time9", "#Time10", "#Time11", "#Time12", "#Time1", "#Time2", "#Time3", "#Time4", "#Time5"];
var militarTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];




function timerComparer() {
    for (i = 0; i < TextBoxes.length; i++) {
        var dataGet = localStorage.getItem(TextBoxes[i])
        if (dataGet) {
            $(TextBoxes[i]).val(dataGet);
        }


        if (militarTime[i] > currentHour) {
            $(TextBoxes[i]).addClass("future")

        } else if (militarTime[i] === currentHour) {
            $(TextBoxes[i]).addClass("present");

        } else {
            $(TextBoxes[i]).addClass("past");

        }
    }
}

var saveButtons = $('.saveBtn');

saveButtons.on('click', function () {
    var BoxID = $(this).attr('data-id');
    var textbox = $('#' + BoxID).val();
    console.log(textbox)

    localStorage.setItem('#' + BoxID, textbox);




})
//In Event.Listener
//local.setitem();


// adding date and live clock to header
//var dailyClock = setInterval(() => {
 //   $('#currentDay').text(moment().format('ddd MM/DD - hh:mm:ss a'))
//}, 1000);
