function AppViewModel() {

	self.getAllTrips = function() {
		var allTrips = [];
	
		$.ajax("/api/trips", {
            type: "get", contentType: "application/json",
            success: function(result) {
				if (typeof result == 'string') {
					alert("hi");
					//alert(jQuery.parseJSON(result));
				}
				else {
					alert("error");
					// show an error message
				}
			}
		});
	}();
}

// Activates knockout.js
ko.applyBindings(new AppViewModel(), document.getElementById('box-dash'));