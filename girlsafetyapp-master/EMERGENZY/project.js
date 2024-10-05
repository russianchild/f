// Panic Button
document.getElementById('panic-button').addEventListener('click', function() {
  alert('⚠️ Panic Alert Sent! Your location has been shared with your emergency contacts.');
});

// Location Tracker and Google Maps
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
  });
}

document.getElementById('location-tracker').addEventListener('click', function() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
      document.getElementById('location-status').innerText = "Geolocation is not supported by this browser.";
  }
});

function showPosition(position) {
  const latLng = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
  };
  const marker = new google.maps.Marker({
      position: latLng,
      map: map
  });
  map.setCenter(latLng);
  document.getElementById('location-status').innerText = 
      "Latitude: " + position.coords.latitude + 
      ", Longitude: " + position.coords.longitude;
}

function showError(error) {
  document.getElementById('location-status').innerText = "Unable to retrieve location.";
}

// Toggle visibility of resources and education sections
document.getElementById('safety-resources').addEventListener('click', function() {
  toggleVisibility('resources-list');
});

document.getElementById('education-material').addEventListener('click', function() {
  toggleVisibility('education-list');
});

function toggleVisibility(id) {
  const element = document.getElementById(id);
  if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
  } else {
      element.classList.add('hidden');
  }
}
document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById("login-form");
	const stateNameInput = document.getElementById("state-name");
	const mobileNumberInput = document.getElementById("mobile-number");
	const errorMessageDiv = document.getElementById("error-message");

	form.addEventListener("submit", function(event) {
		event.preventDefault();

		const stateName = stateNameInput.value.trim();
		const mobileNumber = mobileNumberInput.value.trim();

		if (stateNumber === "" || mobileNumber === "") {
			errorMessageDiv.innerText = "Please enter both state number and mobile number.";
			return;
		}

		// Add validation logic for state number and mobile number here
		// For example, you can check if the state number is a valid 2-digit number
		// and if the mobile number is a valid 10-digit number

		// If validation is successful, you can redirect the user to the next page
		// or perform any other action
		alert("Login successful!");
	});
});