

function getColorByType(type) {
    const colors = [
        { type: 'warehousing', color: '#02bdb6' },
        { type: 'sea freight', color: '#8472d5' },
        { type: 'ground transport', color: '#435d77' },
        { type: 'air freight', color: '#00a2df' },
    ]

    return colors.find(color => color.type === type).color
}

console.log(getColorByType('ground transport'));
