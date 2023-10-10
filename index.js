
const dayOfWeek = document.querySelector('.dayInaWeek')
const currentDateUtc = document.querySelector('.timeInUtc')

function updateWeek(){

    // dayOfWeek .textContent= new Date().getUTCDay();
    // console.log(currentDateUtc);

     dayOfWeek.textContent = new Date().toLocaleDateString('en-US', {weekday:"long"});
     
     console.log(dayOfWeek);
}

function updateTimeUtc(){
    currentDateUtc .textContent= new Date().toUTCString();
    // console.log(currentDateUtc); 
      
}

setInterval(updateTimeUtc, 1000);
//update every second
updateWeek();