//DOM
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
    headingFocus = document.getElementById('heading-focus');
    


//show time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

        // AM or PM
const amPm = hour >= 12 ? "PM" : "AM";

//12 hour
hour = hour % 12 || 12;

time.innerHTML = `${hour}<span>:</span> ${addZero(min)}<span>:</span>${addZero(sec)}`;


setTimeout(showTime,1000);

}


// add zero
function addZero(num) {
    return (parseInt(num, 10) < 10 ? '0' : "") + num;
}

// Set background and Greeting

function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        document.body.style.backgroundImage= "url('./img/morning.jpg";
        greeting.textContent= 'Good Morning!';
    } else if(hour < 18) {
        document.body.style.backgroundImage= "url('./img/afternoon.jpg";
        greeting.textContent= 'Good Afternoon!';
    } else {
        document.body.style.backgroundImage= "url('./img/night.jpg";
        greeting.textContent= 'Good Night!';
        time.style.color="white";
        greeting.style.color='white';
        name.style.color='white';
        focus.style.color='white';
        headingFocus.style.color="white";
        headingFocus.textContent = "What was your main focus for today?";
        
    }
}

// Get name function

function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set Name
function setName(e) {
    if(e.type === "keypress") {
        if(e.which === 13 || e.keycode === 13) {
            localStorage.setItem('name', e.target.innerText)
            focus.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}


//Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]'
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}


// set focus 
function setFocus(e) {
    if(e.type === "keypress") {
        if(e.which === 13 || e.keycode === 13) {
            localStorage.setItem('focus', e.target.innerText)
            name.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)



showTime();
setBgGreet();
getName();
getFocus();
