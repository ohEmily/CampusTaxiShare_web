function Trip(departure, start, end) {
    this.departure_time_date = departure;
	this.start_point = start;
	this.end_point = end;
	this.owner_email;
}

function TripsAppViewModel() {
	self.allTrips = ko.observableArray([]);
	
	self.getAllTrips = function() {
		$.ajax("/api/trips", {
            type: "get", contentType: "application/json",
            success: function(result) {
				for (var i = 0; i < result.length; i++) {
					var newTrip = new Trip(result[i].departure_time_date, result[i].start_point, result[i].end_point);
					newTrip.owner_email = result[i].owner_email;
					allTrips.push(newTrip);
				}
			},
			failure: function() {
				alert("error: " + result);
				// show an error message to user
			}
		});
	}();
}

// Activates knockout.js
ko.applyBindings(new TripsAppViewModel(), document.getElementById('trips-div'));

function CreateAppViewModel() {

	self.allLocationNames = ko.observableArray([]);
	
	self.populateLocationSelects = function() {
		$.ajax("/api/locations", {
			type: "get", contentType: "application/json",
            success: function(result) {
				for (var i = 0; i < result.length; i++) {
					allLocationNames.push(result[i].locationName);
				}
			},
			failure: function() {
				alert("Error: " + result);
			}
		});
	}();
	
	this.departureWhen = ko.observable("");
	this.startPoint = ko.observable("");
	this.endPoint = ko.observable("");
	
	self.createTrip = function() {

		var trip = new Trip(this.departureWhen(), this.startPoint(), 
			this.endPoint()); // add user email on server side
	
		$.ajax("/api/create_trip", {
            data: ko.toJSON(trip),
			type: "post", contentType: "application/json",
            success: function(result) {
				alert(result);
			}
		});
	};
}

ko.applyBindings(new CreateAppViewModel(), document.getElementById('create-div'));