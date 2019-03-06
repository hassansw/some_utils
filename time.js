const minute = 0

function getTimeStr(minutes) {

    const decHour = Math.floor(minutes / 60)
    console.log('decHour:', decHour);

    const modMin = (minutes % 60)

    console.log(decHour + 'h ' + modMin + 'm');
}

getTimeStr(minute)