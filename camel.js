function toPascalCase(string) {
    return `${string}`
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
            new RegExp(/\s+(.)(\w+)/, 'g'),
            ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\s/, 'g'), '')
        .replace(new RegExp(/\w/), s => s.toUpperCase());
}

const newOb = {
    name: "Hassan",
    id: 007
}

const newString = JSON.stringify(newOb)

const pasString = toPascalCase(newString)
console.log(pasString);
const parsedObj = JSON.parse(pasString)
console.log(parsedObj);

