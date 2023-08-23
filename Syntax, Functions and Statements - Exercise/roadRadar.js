function roadRadar(speed, area) {

// On the motorway, the limit is 130 km/h
// On the interstate, the limit is 90 km/h
// In the city, the limit is 50 km/h
// Within a residential area, the limit is 20 km/h
    let speeding;
    let speedLimit;
switch (area) {
    case "motorway": 
    speeding = 130 - speed;
    speedLimit = 130;
    if (speeding < 0) {
        speeding = Math.abs(speeding);
    speedingLog(speeding, speedLimit);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }
    break;
    case "interstate": 
    speeding = 90 - speed;
    speedLimit = 90;
    if (speeding < 0) {
        speeding = Math.abs(speeding);
    speedingLog(speeding, speedLimit);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }
    break;
    case "city": 
    speeding = 50 - speed;
    speedLimit = 50;
    if (speeding < 0) {
        speeding = Math.abs(speeding);
    speedingLog(speeding, speedLimit);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }
    break;
    case "residential" : 
    speeding = 20 - speed;
    speedLimit = 20;
    if (speeding < 0) {
        speeding = Math.abs(speeding);
    speedingLog(speeding, speedLimit);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }
    break;
}

function speedingLog(speeding, speedLimit) {
    if (speeding <= 20) {
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - speeding`);
    } else if (speeding <= 40) {
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
    } else {
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
    }
}
}
