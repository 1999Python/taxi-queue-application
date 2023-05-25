function TaxiQueue() {

	let passengerCounter = 0;

	let taxiCounter = 0;


	function joinQueue() {

		passengerCounter++;

	}

	function leaveQueue() {

		 passengerCounter--;

	}

	function joinTaxiQueue() {
		taxiCounter++;

	}

	function queueLength() {
		passengerCounter;
	
	}

	function taxiQueueLength() {
		taxiCounter;
	}

	function taxiDepart() {

		if (taxiQueue > 0 && passengerQueue >= 12 ) {
			taxiQueue--;
		
		  }
		
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}