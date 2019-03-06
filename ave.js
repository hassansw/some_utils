let pos = {
    lat1: 37.83333333, lng1: -122.30000000,
    lat2: 25.00000000, lng2: 55.00000000
}

function getAverage(lat1, lng1, lat2, lng2) {
    let newLat = lat1 + ((lat2 - lat1) / 2);
    let newLong = lng1 + ((lng2 - lng1) / 2);
    return {
        latitude: newLat,
        longitude: newLong
    }
}



let average = getAverage(37.83333333, - 122.30000000, 25.00000000, 55.00000000)
console.log(average);


