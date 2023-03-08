const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// for (let i = 0; i < 11; i++) {       Commenting out these
//     console.log(i)                   lines, because it can slow
// }                                    down the device

// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }

// for (let i = 0; i < 25; i++) {
//     console.log(i)
// }


// for (let i = 1; i < 10; i++) {
//     console.log('#'.repeat(i))
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i*i}`)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}  ${i*i}  ${i*i*i}`)
// }

// for (let i = 0; i <= 100; i++) {
//     if(i%2 === 0){
//         console.log(i)
//     }
// }

// for (let i = 0; i <= 100; i++) {
//     if(i%2 !== 0){
//         console.log(i)
//     }
// }

// let sumOfAllNumbers = 0;
// for (let i = 0; i <= 100; i++) {
//     sumOfAllNumbers+=i;
// }

// console.log(`The sum of all numbers from 0 to 100 is ${sumOfAllNumbers}`)

function findTheFollowing(startIndex, endIndex, ...typeOfNumbers){
    

    let startsFrom = startIndex, 
        result = 0,
        sentenceToReturn = [];
    
    if(typeOfNumbers.includes('even')){

        for (startIndex = 0; startIndex <= endIndex; startIndex++) {
            if((startIndex % 2) === 0){
                result += startIndex;
            }
        }
        sentenceToReturn.push(`The sum of all ${typeOfNumbers} from ${startsFrom} to ${endIndex} is ${result}`)
    }

    if(typeOfNumbers.includes('odd')){

        for (startIndex = 0; startIndex <= endIndex; startIndex++) {
            if((startIndex % 2) !== 0){
                result += startIndex;
            }
        }
        sentenceToReturn.push(`The sum of all ${typeOfNumbers} from ${startsFrom} to ${endIndex} is ${result}`)
    }

    if(typeOfNumbers.includes('sum')){

        for (startIndex = 0; startIndex <= endIndex; startIndex++) {
            result += startIndex;
        }
        sentenceToReturn.push(`The sum of all ${typeOfNumbers} from ${startsFrom} to ${endIndex} is ${result}`)
    }

    else {
        return 'Error'
    }

    return sentenceToReturn;
}

// console.log(findTheFollowing(0, 100, 'even', 'sum'))


function generateRandomNumbers(){
    let arr = []

    for (let index = 0; index < 5; index++) {
        arr.push(Math.floor(Math.random()*10))
    }
    return arr
}

// console.log(generateRandomNumbers())

function generateRandomNumbers(){
    let arr = [],
        endIndex = 5;

    for (let index = 0; index < endIndex; index++) {
        let random = Math.floor(Math.random()*10);
        if(arr.includes(random)){
            endIndex+=1;
        }
        else {
            arr.push(random)
        }
    }
    return arr
}

// console.log(generateRandomNumbers())


function generateRandomString(length){

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = '';

    for (let i = 0; i < length; i++) {
        result+= characters.charAt(Math.floor(Math.random()*characters.length))
    }

    return result;
}

// console.log(generateRandomString(10))


function generateRandomHexaDecimal(){

    const characters ='0123456789ABCDEF';

    let result = '#';

    for (let i = 0; i < 6; i++) {
        result+= characters.charAt(Math.floor(Math.random()*characters.length))
    }

    return result;
}

// console.log(generateRandomHexaDecimal())


function generateRandomRGB(){

    const characters ='0123456789ABCDEF';

    let result = [];

    for (let i = 0; i < 3; i++) {
        result.push(Math.floor(Math.random()*255))
    }

    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
}

// generateRandomRGB()


function convertCountriesIntoLength(){

    const countriesIntoLength = [];

    countries.forEach(country => {
        countriesIntoLength.push(country.length)
    });

    return countriesIntoLength
}

// console.log(convertCountriesIntoLength())

function convertContriesIntoTwoDimension(){

    let twoDimensional = [];

    countries.forEach(country =>{
        let arr = [];

        arr.push(country, country.slice(0, 3).toUpperCase(), country.length);

        twoDimensional.push(arr);
    })

    return twoDimensional;
}

// console.log(convertContriesIntoTwoDimension())


function findLandInArray(){
    let arr = ['Finland','Ireland', 'Icelnd'],
        count = [];

    arr.forEach(ar => {
        if(ar.includes('land')){ count.push(ar) }
    })

    console.log(count.length)

    if(count.length<3 && count.length>0 ){ return `${count.length} countries are with land` }
    else if(count.length === 0){ return 'All these countries are without land' }
    else { return 'All these countries are with land' }
}

// console.log(findLandInArray())


function findLandEndingwithAi(){
    let arr = ['Albania', 'Bolivia','Ethiopia'],
        count = [];

    arr.forEach(ar => {
        if(ar.slice(-2, ar[-1])){ count.push(ar) }
    })

    if(count.length<=3 && count.length>0 ){ return `${count.join(', ')} countries are ending with 'ai'` }
    else if(count.length === 0){ return 'All these countries are without ai' }
    else { return 'Error' }
}

// console.log(findLandInArray())

function findCountryLargestCharecter(){
    let countryCharecterLength = []

    countries.forEach(country => countryCharecterLength.push(country.length))

    return countries[countryCharecterLength.indexOf(Math.max(...countryCharecterLength))]
}

//findCountryLargestCharecterFromArray()  // Ethiopia

function findCountryWithFiveCharecters(){
    let countryWithFiveCharecters = []

    countries.forEach(country => {
        if(country.length !== 5) return        
        countryWithFiveCharecters.push(country)
    })
    
  return countryWithFiveCharecters;  
}

// findCountryWithFiveCharecters()       // [ 'Japan', 'Kenya' ]


function findLongestWordInWebTechArray(){
    let longestWord = []

    webTechs.forEach(tech => longestWord.push(tech.length))

    return webTechs[longestWord.indexOf(Math.max(...longestWord))]
}

// console.log(findLongestWordInWebTechArray())     // JavaScript

function createTwoDimensionalWebTechArray(){
    let twoDimensionalArray = []

    webTechs.forEach( techs =>{
        let arr = []

        arr.push(techs, techs.length)
        twoDimensionalArray.push(arr)
    })

  return twoDimensionalArray 
}

// createTwoDimensionalWebTechArray()


function findFirstCharecterFromStack(){
    let stackAcronym = []

    mernStack.forEach(tech => stackAcronym.push(tech.slice(0,1)))

    return stackAcronym.join('')
}

// findFirstCharecterFromStack()    // MERN

// for (const tech of webTechs) {
//     console.log(tech)
// }


const fruitArray = ['banana', 'orange', 'mango', 'lemon'];
const fruitArrayReversed = []

fruitArray.forEach(fruit => fruitArrayReversed.unshift(fruit))

fruitArrayReversed      // [ "lemon", "mango", "orange", "banana" ]


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]


fullStack.forEach(techArray =>                
    techArray.forEach(tech =>                 
        console.log(tech.toUpperCase()))
    )                                       // HTML CSS JS REACE NODE EXPRESS MONGODB, Will be
                                            // logged on console on by one.

let sortedCountries = []    // Without Mutation (Doesn't affect the orginal array)

countries.forEach(country => sortedCountries.push(country))

sortedCountries.sort()

let sortedWebTechAndMernStack = [...fullStack, ...webTechs]
sortedWebTechAndMernStack.shift(0)
sortedWebTechAndMernStack.shift(1)

sortedWebTechAndMernStack.sort()     // [ "CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux" ]


function extractCountriesWithLand(){
    let countriesEndsWithLand = []

    countries.forEach(country => {
        if(!country.includes('land')) return

        countriesEndsWithLand.push(country)
    })

    return countriesEndsWithLand;
}

// extractCountriesWithLand()          // [ "Finland", "Ireland" ]


function extractCountriesFourCharecters(){
    let countriesWithFourCharecters = []

    countries.forEach(country => {
        if(country.length !== 4) return

        countriesWithFourCharecters.push(country)
    })

    console.log(countriesWithFourCharecters)
}

// extractCountriesFourCharecters()     // [ ] - Empty Array


/*
    Extract all the countries containing two or more words 
    from the countries array and print it as array

    - It will return an empty array
*/



const reversedCountriesArray = [];
countries.forEach(country => reversedCountriesArray.push(country.toUpperCase()));

reversedCountriesArray.reverse()

reversedCountriesArray         // [ "KENYA", "JAPAN", "IRELAND", "HUNGARY", "GERMANY", … ]