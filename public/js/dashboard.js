function Trip(departure, start, end) {
    this.departure_time_date = departure;
	this.start_point = start;
	this.end_point = end;
	this.owner;
}

function AppViewModel() {
	self.allTrips = [];
	
	self.getAllTrips = function() {
		$.ajax("/api/trips", {
            type: "get", contentType: "application/json",
            success: function(result) {
				alert(result);
			},
			failure: function() {
				alert("error: " + result);
				// show an error message to user
			}
		});
	}();
	
	this.departureWhen = ko.observable("");
	this.startPoint = ko.observable("");
	this.endPoint = ko.observable("");
	
	self.createTrip = function() {
		var trip = new Trip(this.departureWhen, this.startPoint, this.endPoint); // will add user email on server side
	
		$.ajax("/api/create_trip", {
            data: ko.toJSON(trip),
			type: "post", contentType: "application/json",
            success: function(result) {
				alert("hi");
				alert(result);
			},
			failure: function() {
				alert("Error: " + result);
			}
		});
	};
}

// Activates knockout.js
ko.applyBindings(new AppViewModel(), document.getElementById('box-dash'));