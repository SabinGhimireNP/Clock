const clock = document.querySelector("#clock");

// console.log(time.toLocaleTimeString());

//syntax :
// setInterval(function(){},1000 ); // 1000 is in milliseconds

//setInterval is a function that executes given function every given time interval.

setInterval(function () {
  const time = new Date();

  clock.innerHTML = `<span>${time.toLocaleTimeString()}</span>`;
}, 1000);
