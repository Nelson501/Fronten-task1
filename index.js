
const dayOfWeek = document.querySelector('[data-testid = "currentdayOfTheweek"]')
const currentDateUtc = document.querySelector('[data-testid = "currentUtcDate"]')

function updateWeek(){
     dayOfWeek.textContent = new Date().toLocaleDateString('en-US', {weekday:"long"});
     
    //  console.log(dayOfWeek);
}

function updateTimeUtc(){
    currentDateUtc .textContent = new Date().toUTCString();
      
}

setInterval(updateWeek, 1000);
//update every second
updateTimeUtc();