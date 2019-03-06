const name = 'Hassan'
const name1 = 'Hassan '
const name2 = 'Muhammad Hassan'


function valiDateName(name = '') {
    let nameValid = false
    const arr = name.split(' ')
    // console.log(arr);
    const lastIndex = arr.length - 1
    const lastItem = arr[lastIndex]
    if (lastItem && lastItem.length > 0) {
        nameValid = true
    }

    let newString = ''
    const totalLengt = arr.length
    for (let i = 0; i < totalLengt; i++) {
        const nextIndex = i + 1
        if (nextIndex < totalLengt && arr[nextIndex].length > 0) {
            newString = newString.concat(arr[i] + ' ')
        } else {
            newString = newString.concat(arr[i])
        }
    }

    return newString
}
console.log(valiDateName(name).length);

console.log(valiDateName(name1).length);

console.log(valiDateName(name2).length);
