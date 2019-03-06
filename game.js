function some(s_input) {
    const arr = (typeof s_input === 'string') ? s_input.split("") : s_input
    const unq = arr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj).indexOf(obj) === pos;
    })
    let dupArr = arr.filter((t={},e=>!(1-(t[e]=++t[e]|0)))) 
    console.log(dupArr);
    
    return unq.concat(dupArr);
}

console.log(some([1,2,2,3,3]));
