function kFormatter(labelValue) {
    // let value = num > 999 ? (num / 1000).toFixed(1) : num
    // const currControl = new CurrencyControl()
    // let value = 0
    // let strVal = ''
    // if (num > 9999) {
    //   // console.log(num)
    //   strVal = (num / 1000).toFixed(1)
    //   value = parseInt(strVal)
    //   if (value == Math.floor(value)) {
    //     strVal = Math.floor(value).toLocaleString() + 'K'
    //   } else {
    //     strVal = value.toLocaleString() + 'K'
    //   }
    // } else {
    //   strVal = (num, 0).toLocaleString()
    // }
    let strVal = ' '
    if (Number(labelValue) > 1000) {
        strVal = Math.abs(Number(labelValue)) >= 1.0e+9 ? (((Number(labelValue)) / 1.0e+8)).toLocaleString() + "B+" : (Number(labelValue)) >= 1.0e+5
            ? (((Number(labelValue)) / 1.0e+5)).toLocaleString() + "M+" : (Number(labelValue)) >= 1.0e+3
                ? (((Number(labelValue)) / 1.0e+3)).toLocaleString() + "K+" : ((Number(labelValue))).toLocaleString();
    } else {
        strVal = Number(labelValue).toLocaleString()
    }
    return strVal
}

console.log(kFormatter(15500));
