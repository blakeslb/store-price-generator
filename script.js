console.log("This is working");

let itemName = prompt("Enter the name of the item.");
let basePrice = prompt("What is the base price of the item?");
basePrice = Number(basePrice);
let bFriday = prompt("Is today Black Friday? Answer yes or no.");
let sEngine = prompt("Did purchaser find the product through a search engine? Answer yes or no.");
let compSite = prompt("Did the purchaser visit a comparison-shopping site? Answer yes or no");
let finalPrice = basePrice;
let message = `The base price for the ${itemName} is $${basePrice}.`

if (bFriday == "yes"){

    message += " Since it's Black Friday, we will reduce the price by 25%.";
    finalPrice *= .75;
} else {

    message += " It's not Black Friday, so the price didn't change for that.";
}

if (sEngine == "yes") {

    message += " We will increase the price by 1% to pay the search engine.";
    
    finalPrice *= 1.01;
} else{

    message += "The customer didn't use a search engine, so the price didn't change for that."
}

if (compSite == "yes") {

    message += " Since the customer visited a comparison-shopping site, we will reduce the price by 10%.";

    finalPrice *= .90

} else{  
    message += " The customer didn't visit a comparison-shopping site, so the price didn't change for that.";
}

finalPrice = finalPrice.toFixed(2);
basePrice.toFixed(2);

message += ` The final price is $${finalPrice}.`

console.log(message);