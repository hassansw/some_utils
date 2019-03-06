function kFormatter(labelValue) {
    let strVal = ' '
    if (Number(labelValue) > 1000) {
        strVal = Math.abs(Number(labelValue)) >= 1.0e+9 ? (((Number(labelValue)) / 1.0e+8)).toLocaleString() + "B" : (Number(labelValue)) >= 1.0e+5
            ? (((Number(labelValue)) / 1.0e+5)).toLocaleString() + "M" : (Number(labelValue)) >= 1.0e+3
                ? (((Number(labelValue)) / 1.0e+3)).toLocaleString() + "K" : ((Number(labelValue))).toLocaleString();
    } else {
        strVal = Number(labelValue).toLocaleString()
    }
    return strVal
}

console.log(kFormatter(7722690));
