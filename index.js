console.log("Hello World!");

let currentTemp = 32;

let isRaining = false;

if (currentTemp <= 40) {
    console.log(`It’s ${currentTemp} degrees outside! Wear a heavy jacket.`);
}

else if (currentTemp <= 60) {
    console.log(`It’s ${currentTemp} degrees outside! Wear a jacket.`);
}

else if (currentTemp < 70) {
    console.log(`It’s ${currentTemp} degrees outside! Wear a light jacket.`);
}

else {
    console.log("It's hot out today! No jacekt needed!");
}

if (isRaining) {
    console.log("It’s raining, too, so you should bring an umbrella!"); 
}
else {
    console.log("No rain today, you can leave the umbrella at home!");
}