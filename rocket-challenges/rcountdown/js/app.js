const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const rushBtn = document.querySelector(".launch-button");
const pauseBtn = document.querySelector(".launch-abort");
const resumeBtn = document.querySelector(".launch-resume");

const toast = document.querySelector(".toast"),
      closeIcon = document.querySelector(".close"),
      progress = document.querySelector(".progress"),
      toastTitle = document.querySelector(".text-1"),
      toastSpan = document.querySelector(".text-2")

const date = new Date("01-06-2023");

let timer1, timer2;

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
  
  activateToast();
  activateCloseBtn()

  toastTitle.innerHTML = 'Rush mode actived!'
  toastSpan.innerHTML = 'Please fasten your seat belt! ⛑'
  
  var rushSeconds = 15

  var timeLeft = setInterval ( () => {
    if(rushSeconds <= 0) {
        clearInterval(timeLeft)
    }
    pauseBtn.setAttribute('disabled', 'disabled')
    seconds.innerHTML = (rushSeconds).toString().padStart(2, 0);   
    rushSeconds -= 1
    console.log(rushSeconds)
    
  }, 1000)

 
}

pauseBtn.addEventListener("click", () => {
  
    clearInterval(timer);
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
    activateToast();
    activateCloseBtn()

    toastTitle.innerHTML = 'Oh no! 😢'
    toastSpan.innerHTML = 'Houston we got a problem!'
    
   
  
});

resumeBtn.addEventListener("click", () => {
    timer = setInterval(countDown, 1000);
    pauseBtn.style.display = 'block'
    resumeBtn.style.display = 'none';
    activateToast();
    activateCloseBtn()
    toastTitle.innerHTML = 'Yeeeeah!'
    toastSpan.innerHTML = 'Rocket has no reverse 🚀'

})

rushBtn.addEventListener("click", countDownRush);


timer = setInterval(countDown, 1000);

const activateToast = () => {
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
      toast.classList.remove("active");
  }, 5000);

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);

  clearTimeout(timer1);
  clearTimeout(timer2);
}

const activateCloseBtn = () => {
  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");
    
    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);
})}
