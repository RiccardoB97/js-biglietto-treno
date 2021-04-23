// Ask user age
var userAge = parseInt(prompt('How old are you?'));
// Ask how many km
var userDistance = parseInt(prompt('How long is your journey? Write the amount of Km:'));
// The price is 0.21$ per km
var pricePerKm = 0.21;

// Multiplies the user distance times the price per km
var ticketPrice = (userDistance * pricePerKm);

var discountUnderAge = (ticketPrice / 100) * 20;
console.log(discountUnderAge);
var discountSenior = (ticketPrice / 100) * 40;
console.log(discountSenior);