const p = document.querySelector('.containar header p');
const days = document.querySelector('.days');
const buttons = document.querySelectorAll('.btn button');
const btn = document.querySelector('.btn');

let date = new Date()
let currentYear = date.getFullYear();
let currentMonth = date.getMonth()

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



function renderCalender() {
    let lis = ''
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay()
    let currentlastDate = new Date(currentYear, currentMonth + 1, 0).getDate()
    let lastDayofMonth = new Date(currentYear, currentMonth + 1, currentlastDate).getDay()
    let lastDateoflastMonth = new Date(currentYear, currentMonth, 0).getDate()



    for (let i = firstDayofMonth; i > 0; i--) {
        lis += `<li class='inActive'>${lastDateoflastMonth - i + 1}</li>`
    }



    for (let i = 1; i <= currentlastDate; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? 'active' : ''
        lis += `<li class=${isToday}>${i}</li>`
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        lis += `<li class='inActive'>${i - lastDayofMonth + 1}</li>`
    }

    p.innerHTML = month[currentMonth] + ' , ' + currentYear;
    days.innerHTML = lis;
}

btn.addEventListener('click', (e) => {
    if (e.target.id === 'prev') {
        currentMonth--;
    } else if (e.target.id === 'next') {
        currentMonth++;
    }

    if (currentMonth < 0 || currentMonth > 11) {
        date = new Date(currentYear, currentMonth);
        currentYear = date.getFullYear();
        currentMonth = date.getMonth()
    } else {
        date = new Date()
    }
    renderCalender()
})


renderCalender()
