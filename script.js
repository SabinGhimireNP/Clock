const clock = document.querySelector("#clock");
setInterval(function () {
  const time = new Date();

  clock.innerHTML = `<span>${time.toLocaleTimeString()}</span>`;
}, 1000);
// console.log(time.toLocaleTimeString());

//syntax :
// setInterval(function(){},1000 ); // 1000 is in milliseconds which is 1 second

//setInterval is a function that executes given function every given time interval.


