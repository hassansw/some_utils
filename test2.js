let pos = {
    lat1: 37.83333333, lng1: -122.30000000,
    lat2: 25.00000000, lng2: 55.00000000
}
//almost target
// { lat: 42.364946, lng: -27.356084 },
function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

function middlePoint(lat1, lng1, lat2, lng2) {

    //-- Longitude difference
    var dLng = deg2rad(lng2 - lng1)

    //-- Convert to radians
    lat1 = deg2rad(lat1)
    lat2 = deg2rad(lat2)
    lng1 = deg2rad(lng1)

    var bX = Math.cos(lat2) * Math.cos(dLng);
    var bY = Math.cos(lat2) * Math.sin(dLng);
    var lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2), Math.sqrt((Math.cos(lat1) + bX) * (Math.cos(lat1) + bX) + bY * bY));
    var lng3 = lng1 + Math.atan2(bY, Math.cos(lat1) + bX);

    //-- Return result
    return [toDegrees(lng3), toDegrees(lat3)];
}

let midp = middlePoint(pos.lat1, pos.lng1, pos.lat2, pos.lng2)
console.log(midp);
