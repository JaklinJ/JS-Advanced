function townsToJson(arr) {

    let result = [];
   
for (let i = 1; i < arr.length; i++) {
    let [town, latitude, longtitude] = arr[i].split(" | ");
    town = town.split('| ')[1];
    longtitude = longtitude.split(' |')[0];
    latitude = Number(latitude);
    longtitude = Number(longtitude);
    
    result.push({'Town': town, 'Latitude': latitude.toFixed(2), 'Longitude': longtitude.toFixed(2)});

  
}
let objectToJSON = JSON.stringify(result, function (key, value) {
    if (key == "Latitude") {
        return Number(value);
    } else if (key == "Longitude") {
        return Number(value);
    } else {
        return value;
    }
});
    console.log(objectToJSON);

}
