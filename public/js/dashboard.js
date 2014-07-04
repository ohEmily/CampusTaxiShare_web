function Trip(departure, start, end) {
    this.departure_time_date = departure;
	this.start_point = start;
	this.end_point = end;
	this.owner;
}

function TripsAppViewModel() {
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
}

// Activates knockout.js
ko.applyBindings(new TripsAppViewModel(), document.getElementById('trips-div'));

function CreateAppViewModel() {

	this.departureWhen = ko.observable("");
	this.startPoint = ko.observable("");
	this.endPoint = ko.observable("");
	
	self.createTrip = function() {
		var trip = new Trip(this.departureWhen, this.startPoint, this.endPoint); // will add user email on server side
	
		$.ajax("/api/create_trip", {
            data: ko.toJSON(trip),
			type: "post", contentType: "application/json",
            success: function(result) {
				alert("Success: " + result);
			},
			failure: function() {
				alert("Error: " + result);
			}
		});
	};
	
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
}

ko.applyBindings(new CreateAppViewModel(), document.getElementById('create-div'));