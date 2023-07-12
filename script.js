let value = 40, movement = 0, intervalId, moveForward = false, moveBackward = false;


function move(direction) {

  value += 0.5 * [1, -1][direction];

  const car = document.querySelector(".car");
  car.style.margin=`3.5% 0% 0% ${value}%`;
  
  const wheel1 = document.getElementById("wheel1");
  const wheel2 = document.getElementById("wheel2");

  movement += 10 * [1, -1][direction];
  movement %= 360;
  
  wheel1.style.transform = `rotate(${movement}deg)`;
  wheel2.style.transform = `rotate(${movement}deg)`;
}

function start() {
 
  if (moveBackward) return;
  moveForward = true;
  intervalId = setInterval(function() {
    move(1);
  }, 300);
}

function backwards() {

  if (moveForward) return;
  moveBackward = true;
  intervalId = setInterval(function() {
    move(0);

  }, 300);
}

function stop() {

  moveForward = false;
  moveBackward = false;
  clearInterval(intervalId);
}
