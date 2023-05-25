// DOM element references
const TaxiQueue = TaxiQueue();//factory function 

const passengerValueDisplay = document.querySelector(".counter");//Value display of the passneger amount counter

const joinBtnPassengers = document.querySelector(".join_queue");//button to join the queue

const leaveBtn = document.querySelector(".leave_queue");//button to leave the PASSENGER queue

const taxiQueValueDisplay = document.querySelector(".taxi_queue_count count");//Value display of the TAXI amount counter

const joinQueBtnTaxi = document.querySelector("join_taxi_queue");//button for Taxi queue

const departBtn = document.querySelector(".depart");//depart button

const myDepartMessage = document.querySelector(".departMessage");//depart message alert

let counterPassenger = 0;

let counterTaxi = 0;

/////////////////////////////////////////////////////////////////////////////////////////


joinBtnPassengers.addEventListener("click", ()=>{
    counterPassenger++;
    passengerValueDisplay.innerHTML = counterPassenger;
})

leaveBtn.addEventListener("click", ()=>{
    counterPassenger--;
    counterPassenger >= 0;
    passengerValueDisplay.innerHTML = counterPassenger;
})

// What im tryna say is that that the join button needs to continously add peeps. 
//button needs to continously minus someone so they can join a taxi. 

///////////////////////////////////////////////////////////////////////////////////////
joinQueBtnTaxi.addEventListener("click", () => {
    

    
    counterPassenger ++;
    taxiQueValueDisplay >= 12;
    taxiQueValueDisplay.innerHTML = counterPassenger;
})

/////////////////////////////////////////////////////////////////////////////////////////
departBtn.addEventListener("click", () => {
   
})







