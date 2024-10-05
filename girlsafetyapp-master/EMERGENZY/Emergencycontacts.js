// Get the form and textarea elements
const form = document.getElementById('emergency-sos-form');
const textarea = document.getElementById('message');

// Add event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const message = textarea.value.trim();
  if (message !== '') {
    // Send the message to emergency SOS
    console.log('Sending message to emergency SOS:', message);
    // Add code to send the message to emergency SOS here
  } else {
    alert('Please enter a message');
  }
});



// Get the user's current location
 // navigator.geolocation.getCurrentPosition(function(position) {
  //const latitude = position.coords.latitude;
  
  //const longitude = position.coords.longitude;

  // Create a new Google Map
 // const map = new google.maps.Map(document.getElementById('map'), {
    //center: { lat: latitude, lng: longitude },
   // zoom: 15
 // });

  // Add a marker to the map at the user's location
  //const marker = new google.maps.Marker({
    //position: { lat: latitude, lng: longitude },
    //map: map,
    //title: 'Your Location'
 // });
 //});
