// DOM element references
const TaxiQueue = TaxiQueue();//factory function 

const passengerValueDisplay = document.querySelector(".counter");//Value display of the passneger amount counter

const joinBtnPassengers = document.querySelector(".join_queue");//button to join the queue

const leaveBtn = document.querySelector(".leave_queue");//button to leave the PASSENGER queue

const taxiQueValueDisplay = document.querySelector(".taxi_queue_count count");//Value display of the TAXI amount counter

const joinQueBtnTaxi = document.querySelector("join_taxi_queue");//button for Taxi queue

const departBtn = document.querySelector(".depart");//depart button

const myDepartMessage = document.querySelector(".departMessage");//depart message alert

let counterPassenger = 0;//counter for the passengers 

let counterTaxi = 0;//counter for the taxi

/////////////////////////////////////////////////////////////////////////////////////////


joinBtnPassengers.addEventListener("click", ()=>{
    counterPassenger++;
    passengerValueDisplay.innerHTML = counterPassenger;
})

leaveBtn.addEventListener("click", ()=>{
    if (counterPassenger > 0) {
        counterPassenger--;
      }
    passengerValueDisplay.innerHTML = counterPassenger;
})

// What im tryna say is that that the join button needs to continously add peeps. 
//button needs to continously minus someone so they can join a taxi. 

///////////////////////////////////////////////////////////////////////////////////////
joinQueBtnTaxi.addEventListener("click", () => {
    


    counterTaxi ++;
    taxiQueValueDisplay >= 12;
    taxiQueValueDisplay.innerHTML =  counterTaxi;
})

function departTaxi() {
    if (counterPassenger >= 12 && counterTaxi > 0) {
      counterPassenger -= 12;
      counterTaxi--;
      myDepartMessage.innerHTML = "Taxi departed successfully.";
    } else {
      myDepartMessage.innerHTML = "Not enough passengers or no taxi available.";
    }
    passengerValueDisplay.innerHTML = counterPassenger;
    taxiQueValueDisplay.innerHTML = counterTaxi;
  }
  


/////////////////////////////////////////////////////////////////////////////////////////
departBtn.addEventListener("click", departTaxi())




  
  
  





