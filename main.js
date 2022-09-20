let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

function clock() {
  let currentDate = new Date();
  let getSec = currentDate.getSeconds()*6;
  let getMinutes = currentDate.getMinutes()*6;
  let getHour = currentDate.getHours()*30;
  hour.style.transform=`rotate(${getHour+(getMinutes/12)}deg)`
  minute.style.transform=`rotate(${getMinutes}deg)`
  second.style.transform=`rotate(${getSec}deg)`

}

setInterval(clock,1000)
