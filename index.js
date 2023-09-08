
const dayOfWeek = document.querySelector('[data-testid = "currentdayOfTheweek"]')
const currentDateUtc = document.querySelector('[data-testid = "currentUtcDate"]')

function updateWeek(){
     dayOfWeek.textContent = new Date().toLocaleDateString('en-US', {weekday:"long"});
    //  console.log(dayOfWeek);
}

function updateTimeUtc(){
    currentDateUtc .textContent = new Date().toISOString().slice(11, 19) + "UTC";
      
}

setInterval(updateWeek, 1000);
updateTimeUtc();