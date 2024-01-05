// get all inputs
var dayInput = document.getElementById('the-day').value;
var monthInput = document.getElementById('the-month').value;
var yearInput = document.getElementById('the-year').value;

var valed = false;
var inputs = [document.getElementById('the-day'), document.getElementById('the-month'), document.getElementById('the-year')];

var reqaired = document.getElementsByClassName('Required');

var valedDay = false;
var valedMonth = false;
var valedYear = false;

// get date
const date = new Date();

let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

// the result
var days;
var months;
var years;

// out-puts
var outPutDays = document.getElementById('days-out')
var outPutMonths = document.getElementById('months-out')
var outPutYears = document.getElementById('years-out')
function caclulate() {
    dayInput = document.getElementById('the-day').value;
    monthInput = document.getElementById('the-month').value;
    yearInput = document.getElementById('the-year').value;

    if (inputs[0].value === '' || inputs[1].value === '' || inputs[2].value === '') {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '') {
                reqaired[i].style.opacity = '1'
                document.querySelectorAll('.inputs span:first-child')[i].style.color = 'var(--Light-red)';
                inputs[i].style.borderColor = 'var(--Light-red)';
                document.getElementsByClassName('valed')[i].style.opacity = '0';
            } else {
                reqaired[i].style.opacity = '0'
                document.querySelectorAll('.inputs span:first-child')[i].style.color = 'var(--Smokey-grey)';
                inputs[i].style.borderColor = 'var(--Light-grey)';
            }
        }
    } else {
        for (let i = 0; i < inputs.length; i++) {
            reqaired[i].style.opacity = '0'
            document.querySelectorAll('.inputs span:first-child')[i].style.color = 'var(--Smokey-grey)';
            inputs[i].style.borderColor = 'var(--Light-grey)';
        }
        valed = true
    }

    if (dayInput > 0 && dayInput < 32) {
        valedDay = true;
        document.getElementById('invalid-day').style.opacity = '0';
    } else {
        valedDay = false;
        if (dayInput != "") {
            document.getElementById('invalid-day').style.opacity = '1';
            inputs[0].style.borderColor = 'var(--Light-red)';
            document.querySelectorAll('.inputs span:first-child')[0].style.color = 'var(--Light-red)';
        }
    }

    if (monthInput > 0 && monthInput < 13) {
        valedMonth = true;
        document.getElementById('invalid-month').style.opacity = '0';
    } else {
        valedMonth = false;
        if (monthInput != "") {
            document.getElementById('invalid-month').style.opacity = '1';
            inputs[1].style.borderColor = 'var(--Light-red)';
            document.querySelectorAll('.inputs span:first-child')[1].style.color = 'var(--Light-red)';
        }
    }

    if (yearInput.length === 4 && yearInput < currentYear) {
        valedYear = true;
        document.getElementById('invalid-year').style.opacity = '0';
    } else {
        valedYear = false;
        if (yearInput != "") {
            document.getElementById('invalid-year').style.opacity = '1';
            inputs[2].style.borderColor = 'var(--Light-red)';
            document.querySelectorAll('.inputs span:first-child')[2].style.color = 'var(--Light-red)';
        }
    }


    // validation day in special month and year
    if (dayInput == 31 && (monthInput == 2 || monthInput == 4 || monthInput == 6 || monthInput == 9 || monthInput == 11)) {
        valedDay = false;
        if (dayInput != "") {
            document.getElementById('invalid-day').style.opacity = '1';
            inputs[0].style.borderColor = 'var(--Light-red)';
            document.querySelectorAll('.inputs span:first-child')[0].style.color = 'var(--Light-red)';
        }
    }
    if (dayInput == 30 && monthInput == 2) {
        valedDay = false;
        if (dayInput != "") {
            document.getElementById('invalid-day').style.opacity = '1';
            inputs[0].style.borderColor = 'var(--Light-red)';
            document.querySelectorAll('.inputs span:first-child')[0].style.color = 'var(--Light-red)';
        }
    }
    if (dayInput == 29 && monthInput == 2 && (yearInput / 4) % 1 != 0) {
        valedDay = false;
        if (dayInput != "") {
            document.getElementById('invalid-day').style.opacity = '1';
            inputs[0].style.borderColor = 'var(--Light-red)';
            document.querySelectorAll('.inputs span:first-child')[0].style.color = 'var(--Light-red)';
        }
    }

    console.log(dayInput)
    console.log(valedDay)
    console.log(valedMonth)
    console.log(valedYear)


    if (valed && valedDay && valedMonth && valedYear) {
        // calculate days
        if (dayInput > currentDay) {
            if (currentMonth == 4 || currentMonth == 6 || currentMonth == 9 || currentMonth == 11) {
                currentDay = currentDay + 30
                days = currentDay - dayInput;
                currentMonth -= 1;
            } else if (currentMonth == 2 && (currentYear / 4) % 1 != 0) {
                currentDay = currentDay + 28
                days = currentDay - dayInput;
                currentMonth -= 1;
            } else if (currentMonth == 2 && (currentYear / 4) % 1 == 0) {
                currentDay = currentDay + 29
                days = currentDay - dayInput;
                currentMonth -= 1;
            } else {
                currentDay = currentDay + 31
                days = currentDay - dayInput;
                currentMonth -= 1;
            }
        } else {
            days = currentDay - dayInput;
        }
        console.log(days)
        currentDay = date.getDate();
        // calculate months
        if (monthInput > currentMonth) {
            currentMonth = currentMonth + 12;
            months = currentMonth - monthInput;
            currentYear -= 1;
        } else {
            months = currentMonth - monthInput;
        }
        console.log(months)
        currentMonth = date.getMonth() + 1;
        // caculate years
        years = currentYear - yearInput;
        console.log(years)
        currentYear = date.getFullYear();

        outPutDays.innerHTML = days;
        outPutMonths.innerHTML = months;
        outPutYears.innerHTML = years;
    }
}