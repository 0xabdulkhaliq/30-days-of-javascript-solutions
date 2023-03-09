// IIFE

(function fullNameWithoutArguments(){
    console.log('Abdul Khalid')
})();      // Prints Full Name

(function fullNameWithArguments(firstName, lastName){
    return `${firstName} ${lastName}`
})('Abdul', 'Khalid');

(function sumOfTwo(firstNumber, secondNumber){
    return firstNumber + secondNumber
})(8, 4);    // 12

(function areaOfRectangle(length, width){
    return length * width
})(5, 5);    // 25

(function perimeterOfRectangle(length, width){
    return 2*(length + width)
})(4, 4);    // 16

(function volumeOfRectanglePrism(length, width, height){
    return length * width * height
})(2, 2);    // 8

(function areaOfCircle(radius){
    return Math.PI * radius * radius
})(3);       // 28.274333882308138

(function circumferenceOfCircle(radius){
    return 2*Math.PI*radius;
})(5);       // 31.41592653589793

(function densityOfSubstance(mass, volume){
    return mass/volume
})(3, 5);    // 0.6

(function calculateSpeedOfVehicle(totalDistanceTravelled, totalTimeTaken){
    return `${totalDistanceTravelled/totalTimeTaken} Miles Per Hour`;
})(120, 2);   // 60 Miles Per Hour


(function calculateWeightOfSubstance(mass, gravity){
    return mass*gravity
})(5, 8);     // 40

(function convertCelsiusToFahrenheit(celsius){
    return (celsius*9/5)+32;
})(0);       // 32

(function findBMI(heightInCentimeters, weightInKilograms){
    const heightInMeters = heightInCentimeters * 0.01,
          squareOfHeight = heightInMeters * heightInMeters,
          bmi = parseFloat((weightInKilograms / squareOfHeight).toFixed(1));

    if(bmi<18.5){
        return `You are in Underweight because you have a BMI of ${bmi}`
    }
    else if(bmi===18.5 && bmi < 24.9){
        return `You are in Normal weight because you have a BMI of ${bmi}`
    }
    else if(bmi===25 && bmi < 29.9){
        return `You are in Overweight because you have a BMI of ${bmi}`
    } 
    else if(bmi>30){
        return `You are in Obese because you have a BMI of ${bmi}`
    }
    else {
        return 'Please enter valid values'
    }


})(180, 50);    // 15.4

//

//

(function printArray(){
    console.log(...arguments)
})([1,2,3], [4,5,6], [7,8,9]);  // Prints array one by one


(function showDateTime(){
    const dateObject = new Date();

    function isDualDigit(digit){
        return digit.toString().padStart(2, '0');
    }

    function convertHours(hours){
        return isDualDigit(hours % 12 || 12)
    }

    console.log('DD/MM/YYYY HH:MM'
                .replace('DD', isDualDigit(dateObject.getDate()))
                .replace('MM', isDualDigit(dateObject.getMonth()))
                .replace('YYYY', dateObject.getFullYear())
                .replace('HH', convertHours(dateObject.getHours()))
                .replace('MM', isDualDigit(dateObject.getMinutes())))
})();       // 07/02/2023 06:23


(function swapValues(a, b){
    return b, a;
})();


(function reverseArray(array){
    let reversedArray = [];
    array.forEach(el => reversedArray.unshift(el));

    return reversedArray;
})([1,2,3,4,5]);            // [5,4,3,2,1]


(function capitalizeArray(array){
    const capitalizedArray = [];
    array.forEach(el => capitalizedArray.push(el.toUpperCase()))

   return capitalizedArray;
})(['html', 'css', 'js']);   // ['HTML', 'CSS', 'JS']


(function addItem(...items){   // Can take n number of arguments
    return [...items];          // and returns them into a list.
})(10, 20, 30, 40, 50);         // returns - [10, 20, 30, 40, 50]


(function removeItems(array, index){
    array.splice(index, 1);

    return array;
})([10, 20, 30, 40, 50], 2);    // [10, 20, 40, 50]


(function sumOfNumbers(){
    let sumOfNumbers = 0; 
    [...arguments].forEach(number => sumOfNumbers+=number);
    
    return sumOfNumbers;
})(25, 15, 25, 15, 25);         // 105


(function sumOfOdds(){
    let sumOfNumbers = 0;
    [...arguments].forEach(number => {
        if(number%2 === 0) return;

        sumOfNumbers+=number
    })
    
    return sumOfNumbers;
})(1, 3, 2, 3);          // 7


(function sumOfEvens(){
    let sumOfNumbers = 0;
    [...arguments].forEach(number => {
        if(number%2 !== 0) return;

        sumOfNumbers+=number
    })
    
    return sumOfNumbers;
})(2, 7, 2, 7);          // 4


(function numberOfEvenAndOdds(numberCount){
    let odds = 0,
        evens = 0;

    for(let currentNumber=0; currentNumber<=numberCount; currentNumber++){
        currentNumber %2 !== 0 ? evens+=1: odds+=1
    }
    
    return `The Number of Odds are ${odds} 
            \nThe Number of Evens are ${evens}`;

})(100);        //  The Number of Odds are 50 
                //  The Number of Evens are 51

(function sumOfArguments(){
    let sumOfArguments = 0;

    [...arguments].forEach(number => sumOfArguments+=number);

    return sumOfArguments;
})(2, 2, 2, 2, 2, 2);        // 12


(function generateRandomUserIp(){
    function getRandomNumber(){
        return Math.floor(Math.random()*255)
    }

    return `${getRandomNumber()}
           .${getRandomNumber()}
           .${getRandomNumber()}
           .${getRandomNumber()}`;

})();        // 192.0.0.1


(function generateRandomMacAddress(){
    const charecters = 'ABCDEF0123456789';

    function getCharecter(){
        return charecters[Math.floor(Math.random()*charecters.length)]
    }

    let result = '';

    for(let i=1; i<12; i++){
        if(i%2!==0){
            result+=`${getCharecter()}${getCharecter()}`
        }
        if(i%2===0){
            result+=`-` 
        }
    }

    return result
})();            // 63-E6-65-4A-5D-41


function generateRandomHex(){
    const charecters = 'ABCDEF0123456789';

    function getCharecter(){
        return charecters[Math.floor(Math.random()*charecters.length)]
    }

    let hexaDecimal = '#';

    for(let i=1; i<7; i++){
        hexaDecimal+=getCharecter()
    }

    return hexaDecimal
};

generateRandomHex();   // BADA55 😎




(function generateRandomUserId(){
    const charecters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function getCharecter(){
        return charecters[Math.floor(Math.random()*charecters.length)]
    }

    let userId = '';

    for(let i=1; i<=7; i++){
        userId+=getCharecter()
    }

    return userId;
})();                // 4CH13V3 🚀


(function generateRandomUserIdWithConstraints(length, numberOfIdsToBeGenerated){
    const charecters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          generatedIds = [];

    function getCharecter(){
        return charecters[Math.floor(Math.random()*charecters.length)]
    }


    for(let i=1; i<=numberOfIdsToBeGenerated; i++){
        let userId = ''

        for(let j=1; j<=length; j++){
            userId+=getCharecter()
        }

        generatedIds.push(userId)
    }
    

    console.log(generatedIds)
})(10, 5);                // [ "ba9LqCfPsR", "VSrpDRuyBF", "lMAUh9GA6a", "NwtozEtElL", "HW3ZiHSdOZ" ]



function rgbColorGenerator(){
    function getRGB(){
        return Math.floor(Math.random()*255);
    }

    return `rgb(${getRGB()},${getRGB()},${getRGB()})`

};    // rgb(255, 100, 255)


(function arrayOfHexaColors(numberOfHexToBeGenerated){
    const arrayOfHexaColors = [];

    for(let i=1; i<=numberOfHexToBeGenerated; i++){
        arrayOfHexaColors.push(generateRandomHex())
    }

    return arrayOfHexaColors;
})(5);          // [ "#053624", "#EABF04", "#0A6A75", "#985A32", "#41603E" ]


(function arrayOfRGBColors(numberOfRGBsToBeGenerated){
    const arrayOfRGBColors = [];

    for(let i=1; i<=numberOfRGBsToBeGenerated; i++){
        arrayOfRGBColors.push(rgbColorGenerator())
    }

    return arrayOfRGBColors;
    
})(3);      // [ "rgb(156,115,163)", "rgb(2,134,157)", "rgb(100,1,196)" 




function hexaToRgb(hex){
    const hexCode = hex.replace('#', '');   // Removes '#', if exists.

    const red = parseInt(hexCode.substring(0, 2), 16),     // Converts the hexadecimal string
          green = parseInt(hexCode.substring(2, 4), 16),   // to a decimal number
          blue = parseInt(hexCode.substring(4,6), 16),
          finalizedRGB = `rgb(${red},${green},${blue})`;

    return finalizedRGB;
}


function rgbToHexa(red, green, blue){
    // convert each color to hexadecimal and then concat them.

    const hexRed = red.toString(16).padStart(2, '0'),
          hexGreen = green.toString(16).padStart(2, '0'),
          hexBlue = blue.toString(16).padStart(2, '0'),
          finalizedHEX = `#${hexRed}${hexGreen}${hexBlue}`

    return finalizedHEX;
}

function generateColors(colorToProduce, numbersOfColorsToProduced){
    let generatedColors = []

    for(let i=1; i<=numbersOfColorsToProduced; i++){
        
        if(colorToProduce === 'hexa'){
            generatedColors.push(generateRandomHex())
        }
        else if(colorToProduce === 'rgb'){
            generatedColors.push(rgbColorGenerator())
        }
        else {
            return 'Enter valid values';
        }
    }

    return generatedColors;
}



function shuffleArray(array){
    let shuffledArray = []

    while(array.length>0){
        let randomIndex = Math.floor(Math.random()*array.length),
            removedElement = array.splice(randomIndex, 1)[0];

        shuffledArray.push(removedElement);
    }

    return shuffledArray;
}
shuffleArray([1,2,3,4,5,6]);


function factorial(number){
    if(number<1) return 1;

    return number*factorial(number-1);
}

//factorial(4)   // 24


function isEmpty(value){
    if(value === undefined) return 'Empty'

    return 'Not Empty'
}
let emptyVariable;

// isEmpty(emptyVariable)     // Empty

function sumOfNumbers(){
    let sum = 0;

    [...arguments].forEach(number => sum+=number);

    return sum;
}

// sumOfNumbers(2,3,5)     // 10


function sumOfArrayItems(array){
    let result = 0;


    for (item of array) {
        if(typeof item !== "number") {
            result = 'Array consists of illegel charecters, please provide only number values';
            break;
        }
        result+=item
    }

    return result;
}

// sumOfArrayItems([25, 25, 50, 100])  // 200

// sumOfArrayItems([25, 25, 50, '100'])  // Array consists of illegel charecters

function findAverage(array){
    let result = 0

    for (item of array) {
        if(typeof item !== "number") {
            result = 'Array consists of illegel charecters, please provide only number values';
            break;
        }
        result+=item
    }

    return Math.floor(result/array.length);
}

// findAverage([100,50,50])    // 66


function modifyArray(array){
    let result = []

    if(array.length<4) return 'Array must have minimum length of 5'

    array.forEach(item => {
        array.indexOf(item) >= 4 ? result.push(item.toUpperCase()) : result.push(item);
    })

    return result;
}

// modifyArray(['Avocado',     // [ 'Avocado',
//              'Tomato',      //   'Tomato',
//              'Potato',      //   'Potato',
//              'Mango',       //   'Mango',
//              'Lemon',       //   'LEMON',
//              'Carrot'])     //   'CARROT' ]

function isPrime(number){
    let r;

    for(let i=2; i<=number; i+=2){
        console.log(number/i)
        if(Number.isInteger(number/i)){
            r = false
        }
        else {
            r = true
        }
    }

    console.log(r)
}

// isPrime(16)

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

function isUnique(array){
    let arrayIntoString = array.join(','),
        isUnique = true;

    array.forEach(el => {
        let regExp = new RegExp(el, 'gi');

        if(arrayIntoString.match(regExp).length > 1) {
            isUnique = false
        }
    })
    
    return isUnique === true ? 'Array have unique elements' : 'Array elements are not unique'
}

// console.log(isUnique(['hi','da']))


function isSameType(array){
    let arrayIntoString;
        isSame = true;

    array.forEach(el => arrayIntoString+=typeof el)

    array.forEach(el => {
        let regExp = new RegExp(typeof el, 'gi');

        if(arrayIntoString.match(regExp).length !== array.length) {
            isSame = false
        }
    })
    
    return isSame === true ? 'Array elements are in same data type' 
                           : 'Array elements are not same data type'
}
// console.log(isSameType([true, false]))

function generateRandomNumberOfNine(){
    let generatedNumbers = [];

    function getNumber(){
        return Math.floor(Math.random()*9)
    }


    while(generatedNumbers.length<7){
        let number = getNumber();

        if(generatedNumbers.includes(number) === false){
            generatedNumbers.push(number)
        } 
    }
    return generatedNumbers;
}

// generateRandomNumberOfNine()   //  [ 3, 6, 1, 7, 2, 5, 8 ]


function isValidVariable(name) {
    try {
       Function('var ' + name);
    } catch (e) {
       return `Invalid variable name`;
    }
    return `Valid variable name`;
 }

console.log(isValidVariable('hi'))


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

function reverseCountries(countries){
    let reversedCountries = []

    countries.forEach(country => reversedCountries.unshift(country));

    return reversedCountries;
}

// reverseCountries(countries)     //  Returns reversed array without 
                                   //  modifying the original array
