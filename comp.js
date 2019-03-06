function getRadiusDiff(totalModes) {
    let diff = 0
    try { diff = Math.floor(120 / totalModes) }
    catch (error) { diff = 30 }
    return diff
}


const compData = {
    "currencyID": 101,
    "currencyCode": "AED",
    "totalAmount": 2.995148785340098,
    "vasComparisonDetail": [
        {
            "key": "Custom Clearance",
            "amount": 0.000000000000000
        },
        {
            "key": "Quality Monitoring",
            "amount": 0.000000000000000
        },
        {
            "key": "Tracking",
            "amount": 0.000000000000000
        },
        {
            "key": "Insurance",
            "amount": 2.995148785340098
        }
    ]
}



const seriesTemplete = {
    name: 'Line 4',
    type: 'pie',
    clockWise: false,
    radius: [172, 180],
    center: ['50%', '50%'],
    itemStyle: this.dataStyle,
    hoverAnimation: true,
    startAngle: 270,
    label: {
        borderRadius: '10',
    },
    data: [
        {
            value: 55,
            name: 'D', //actual legend
            tooltip: {
                show: true
            },
            itemStyle: {
                normal: {
                    // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    color: (0, 0, 0, 1, [{
                        offset: 0,
                        // color: this.color[6],
                    }, {
                        offset: 1,
                        // color: this.color[7]
                    }])
                }
            }
        },
        {
            value: 45,
            name: '', //remaining legend
            tooltip: {
                show: false
            },
            itemStyle: this.placeHolderStyle
        },
    ]
}

const constRadius = [82, 90] //dont change

function getRadius(radDiff, currRadius) {
    let newRad = currRadius

    newRad[0] = radDiff + newRad[0]
    newRad[1] = radDiff + newRad[1]
    return newRad
}

function getColorByType(type) {
    const colors = [
        { type: 'quality monitoring', color: '#8472d5' },
        { type: 'custom clearance', color: '#02bdb6' },
        { type: 'insurance', color: '#435d77' },
        { type: 'tracking', color: '#00a2df' },
    ]
    return colors.find(color => color.type === type).color
}


let defRadius = constRadius
let defRadiusDiff = getRadiusDiff(compData.vasComparisonDetail.length)

const newSeries = []

// compData.vasComparisonDetail.forEach(vas => {
//     const seireRaius = getRadius(defRadiusDiff, defRadius)
//     defRadius = seireRaius
//     console.log(seireRaius)

//     let newSerie = seriesTemplete
//     newSerie.radius = defRadius

//     const { totalAmount } = compData
//     const { amount, key } = vas
//     const remainingAmount = totalAmount - amount
//     const dataColor = getColorByType(key.toLowerCase())

//     const colorObj = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//         offset: 0,
//         color: dataColor,
//     }, {
//         offset: 1,
//         color: dataColor
//     }])

//     newSerie.data[0].value = amount
//     newSerie.data[0].name = key
//     newSerie.data[0].itemStyle.normal.color = colorObj

//     newSerie.data[1].value = remainingAmount
    
// })

function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}

function extractColumn(arr, column) {
    return arr.map(x => x[column])
}


function getVasLegends(list) {
    const data = removeDuplicates(list.vasComparisonDetail, "key")    
    const legends = extractColumn(data, 'key')
    return legends
}
console.log(getVasLegends(compData));
