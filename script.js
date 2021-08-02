function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

startTime()

const inputEl = document.getElementById('input-el')
const saveEl = document.getElementById('save-el')
const ulEl = document.getElementById('ul-el')

saveEl.addEventListener('click', save)
inputEl.focus()

function save() {
    if (inputEl.value === '') {
    } else {
        ulEl.innerHTML += `<li>${inputEl.value}</li>`
        inputEl.value = ''
        inputEl.focus()
    }
}

inputEl.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        save()
    }
});