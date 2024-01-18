console.log("Hello World!");

let currentTemp = 60;

let isRaining = true;

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

