
const dayOfWeek = document.querySelector('[data-testid = "currentdayOfTheweek"]')
const currentDateUtc = document.querySelector('[data-testid = "currentUtcDate"]')

function updateDateTime(){
     dayOfWeek.textContent = new Date().toLocaleDateString('en-US', {weekday:"long"});
    //  console.log(dayOfWeek);
     currentDateUtc.textContent= new Date().toDateString()
    //  console.log(currentDateUtc);

}

setInterval(updateDateTime, 1000)