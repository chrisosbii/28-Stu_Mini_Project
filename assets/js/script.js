/* Global Variable */
var today = dayjs();
var form = $('#form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');
var timer = $('#time');

/* Functions */

/**
 * Current Time updates the current time object with the latest time
 */
function currentTime(){
    today = dayjs();
    timer.text(today.format("MMM D, YYYY HH:mm:ss A"));
    console.log('in currentTime');
}

/**
 * When loading page this runs
 */
function renderPage(){
    currentTime();
    setInterval(currentTime, 1000);
}

renderPage();