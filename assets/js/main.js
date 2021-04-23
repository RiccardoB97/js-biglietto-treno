// Ask user age
var userAge = parseInt(prompt('How old are you?'));
// Checks if the user used a valid number
if (isNaN(userAge)) {
    alert('You must insert a valid number')
}
// Ask how many km
var userDistance = parseInt(prompt('How long is your journey? Write the amount of Km:'));
// Checks if the user used a valid number
if (isNaN(userDistance)) {
    alert('You must insert a valid number')
}
// The price is 0.21$ per km
var pricePerKm = 0.21;

// Multiplies the user distance times the price per km
var ticketPrice = (userDistance * pricePerKm);
console.log(ticketPrice);

// Creates a discount for underage people
var discountUnderAge = (ticketPrice / 100) * 20;
console.log(discountUnderAge);

// Creates a discount for seniors
var discountSenior = (ticketPrice / 100) * 40;
console.log(discountSenior);

// Empty final price which will be calculated
var finalPrice;

// Applies discounts when needed
if (userAge < 18) {
    finalPrice = (ticketPrice - discountUnderAge)
} else if (userAge >= 65) {
    finalPrice = (ticketPrice - discountSenior)
} else {
    finalPrice = ticketPrice
}
console.log(finalPrice);

document.getElementById('final_price').innerHTML = "Your ticket's price is " + finalPrice.toFixed(2) + "$"