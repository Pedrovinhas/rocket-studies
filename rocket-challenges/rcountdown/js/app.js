const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const rushBtn = document.querySelector(".launch-button");
const pauseBtn = document.querySelector(".launch-abort");
const resumeBtn = document.querySelector(".launch-resume");

const date = new Date("01-06-2023");

function countDown() {
  const now = new Date().getTime();
  const launchDate = (date - now) / 1000;

  const daysTime = Math.floor(launchDate / 3600 / 24);
  const hoursTime = Math.floor(launchDate / 3600) % 24;
  const minutesTime = Math.floor(launchDate / 60) % 60;
  const secondTime = Math.floor(launchDate) % 60;

  days.innerHTML = daysTime.toString().padStart(2, 0);
  hours.innerHTML = hoursTime.toString().padStart(2, 0);
  minutes.innerHTML = minutesTime.toString().padStart(2, 0);
  seconds.innerHTML = secondTime.toString().padStart(2, 0);
}

function countDownRush() {
  clearInterval(timer);
  
  days.innerHTML = '00';
  hours.innerHTML = "00";
  minutes.innerHTML = '00';
  
  var rushSeconds = 15

  var timeLeft = setInterval ( () => {
    if(rushSeconds <= 0) {
        clearInterval(timeLeft)
    }
    seconds.innerHTML = (rushSeconds).toString().padStart(2, 0);   
    rushSeconds -= 1
    console.log(rushSeconds)
    
  }, 1000)

 
}

pauseBtn.addEventListener("click", () => {
  
    clearInterval(timer);
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
  
  
});

resumeBtn.addEventListener("click", () => {
    timer = setInterval(countDown, 1000);
    pauseBtn.style.display = 'block'
    resumeBtn.style.display = 'none';
})

rushBtn.addEventListener("click", countDownRush);


timer = setInterval(countDown, 1000);
