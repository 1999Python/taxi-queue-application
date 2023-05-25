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

		if (taxiQueue > 12 && passengerQueue >= 0 ) {
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