// future feature: show groups created by this user
// https://www.parse.com/docs/relations_guide
		
// populate table
(function() {
	//alert("dashboard");
		
	var Group = Parse.Object.extend("Group");
	var query = new Parse.Query(Group);
	query.find({
		success: function(results) {
		// Do something with the returned Parse.Object values
		for (var i = 0; i < results.length; i++) { 
			var thisGroup = results[i];
			$("#new-trips-table > tbody:last").append('<tr>' 
				+ '<td>' + thisGroup.get("owner").id + '</td>' 
				+ '<td>' + thisGroup.get("departure_time_date")  + '</td>'
				+ '<td>' + "hi" + '</td>' //  results.get("start_point")
				+ '<td>' + "hi" + '</td>' // results.get("end_point")
				+ '</tr>');
			}
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
})();