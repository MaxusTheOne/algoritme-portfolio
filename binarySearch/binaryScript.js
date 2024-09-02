

const numValues = [21,22,23,25,27,28,29,31,32,34,35];
let randomNum = 42;

// legacy ;)
let found;


console.log("Binary search");


function binarySearch( search, values, compFunc ) {
    let min = 0;
    let max = numValues.length - 1;
    let middle;
    while (randomNum === 42){
        // klar til kode!
        middle = Math.floor((min + max) / 2);
        // console.log(`Comparing ${values[middle]} with ${search}`);
        
        let comp = compFunc(values[middle], search);
        // console.log(comp);
        if (min >= max) {
            return -1
        }
        if (comp === 0) {
            return middle;
        } else if (comp < 0) {
            min = middle + 1;
        } else if (comp > 0) {
            max = middle - 1;
        }
    
    }
}

function searchOut(value, index){
if (index == -1) console.log(`could not find ${value} in index`);
else console.log(`found ${value} at index: ${index}`);

}

function compare( a, b ) {
    return a - b;
}

let valueToFind = 26;
let index = binarySearch( valueToFind, numValues, compare );
searchOut(valueToFind, index)

ordliste = ["andedam", "andegård", "bondefanget", "bondegård", "børnearbejde", "gadefejer", "gær", "gødning", "gaardejer", "kalapøjser", "kalundborg", "kørt", "kårde", "ålborg", "aarhus"];

function stringcomparefunction(a, b){
    return b.localeCompare(a)
}

// få denne søgning til at virke!
let wordToFind = "gaardejer"
let wordIndex = binarySearch(wordToFind, ordliste, stringcomparefunction);

searchOut(wordToFind, wordIndex)
