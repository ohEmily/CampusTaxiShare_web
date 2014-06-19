/** Returns the Location object with the name passed as needle. */
var getLocationName = function(needle) 
{
	// https://parse.com/docs/js_guide#objects-retrieving
	var Location = Parse.Object.extend("Location");
	var query = new Parse.Query(Location);
	query.equalTo("locationId", needle);
	query.find(
	{
		success: function(found_object) {
			return found_object.id;
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
			return null;
		}
	});
};

var submitGroup = function() {
	// TODO: check for length of values entered
	
	// https://parse.com/docs/js_guide#objects-saving
	var Group = Parse.Object.extend("Group");
	var newGroup = new Group();
	
	newGroup.set("owner", Parse.User.current());
	newGroup.set("departure_time_date", $scope.group.when);
	newGroup.set("start_point", getLocationName($scope.group.start));
	newGroup.set("end_point", getLocationName($scope.group.end));
	
	newGroup.save(null, {
		success: function(newGroup) {
			alert('New object created with ObjectId: ' + newGroup.id);
		},
		error: function(newGroup, error) {
			alert('this failed');
		}
	});
}

// populate group select
$(document).ready(function() {
	var location = Parse.Object.extend("Location");
	var query = new Parse.Query(location);
	query.find({
		success: function(results) {
			// Do something with the returned Parse.Object values
			for (var i = 0; i < results.length; i++) { 
				$(".locationPick").append(new 
					Option(results[i].get("locationName"), 
					results[i].get("locationId")));
			}
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
	
	//$(".chosen-select").chosen();
})();