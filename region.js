const regionData = [
    {
        "name": "Pakistan",
        "value": 100.0,
        "impExp": "EXPORT"
    },
    {
        "name": "UAE",
        "value": 90.0,
        "impExp": "EXPORT"
    }
]

function getRegionDictionary(list) {
    const regionDict = list.map(region => [region.name, region.value])
    return [['product', 'Volume']].concat(regionDict)
}

console.log(getRegionDictionary(regionData));
