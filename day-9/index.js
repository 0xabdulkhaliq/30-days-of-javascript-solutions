/*

- forEach is used to perform an action for each element of an array.
- map is used to create a new array with the results of a callback function performed on each element. 
- filter is used to create a new array with only the elements that pass a certain condition.
- reduce is used to accumulate a single value based on the elements of an array.

*/


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


const callback = n => {
    return n*n;
}


// countries.forEach(country => console.log(country));

// names.forEach(name => console.log(name));

// numbers.forEach(number => console.log(number));

const countriesUppercased = countries.map(country => country.toUpperCase())
countriesUppercased   //  [ "FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND" ]

const countriesLength = countries.map(country => country.length)
countriesLength       // [ 7, 6, 7, 6, 7 ]

const uppercasedNames = names.map(name => name.toUpperCase())
uppercasedNames       // [ "ASABENEH", "MATHIAS", "ELIAS", "BROOK" ]

const squaredNumbers = numbers.map(number => number*number)
squaredNumbers        // [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]

const productPrices = products.map(product => product.price)
productPrices         // [ 3, 6, " ", 8, 10, "" ]


const countriesContainingLand = countries.filter(country => country.match(/land/gi));
countriesContainingLand    // [ "Finland", "IceLand" ]



const countriesHavingSixCharecters = countries.filter(country => country.length === 6);
countriesHavingSixCharecters   // [ "Sweden", "Norway" ]



const countriesHavingMoreThanSixCharecters = countries.filter(country => country.length >= 6)
countriesHavingMoreThanSixCharecters   // [ "Finland", "Sweden", "Denmark", "Norway", "IceLand" ]


const countriesStartWithCharecterE = countries.filter(country => country.startsWith('E'));
countriesStartWithCharecterE   // [] - Empty (No Countries Available)

const productWithValidPrices = products.filter(product => product.price !== "" && product.price !== " " );  /* 
                                                                                                                0: { product: "banana", price: 3 }​
                                                                                                                1: { product: "mango", price: 6 }​
                                                                                                                2: { product: "avocado", price: 8 }
                                                                                                                3: { product: "coffee", price: 10 }  */

const getStringLists = arr => {
    const stringArray = []

    arr.forEach(el =>{typeof el === 'string'? stringArray.push(el): stringArray});

    return stringArray  // Returns only strings from an array.
}

const mixedArray = [true, 1, false, 0, '4CH13V3R']

// getStringLists(mixedArray)     // [ "4CH13V3R" ]

const sumOfNumbers = numbers.reduce((accumulator, currrent) => accumulator + currrent, 0)
sumOfNumbers      // 55

const concatedCountries = countries.reduce((acc, cur) => acc+', '+cur)

concatedCountries   // Finland, Sweden, Denmark, Norway, IceLand

/*

- "some" returns true if at least one element in the array satisfies the condition.
- "every" returns true only if all elements in the array satisfy the condition.

*/

const areSomeNamesLengthAreGreaterThan7 = names.some((name)=>name.length>7)
areSomeNamesLengthAreGreaterThan7    // true

const isEveryCountriesContainsTheWordLand = countries.every((country)=>country.match(/land/gi));
isEveryCountriesContainsTheWordLand    // false


/*

- "find", returns the first element which satisfies the condition
- "findIndex", returns the index of first element which satisfies the condition

*/

const firstCountryContainingSixCharecters = countries.find((country)=> country.length === 6)
firstCountryContainingSixCharecters    // Sweden


const indexOfFirstCountryContainingSixCharecters = countries.findIndex(country => country.length === 6)
indexOfFirstCountryContainingSixCharecters  // 1

const findIndexOfNorwayInCountriesArray = countries.findIndex(country => country === 'Norway')
findIndexOfNorwayInCountriesArray      // 3

const findIndexOfRussiaInCountriesArray = countries.findIndex(country => country === 'Russia')
findIndexOfRussiaInCountriesArray     // -1


/*
>>-------- L 3 V 3 L  2  --------------->
*/

const totalPriceOfProducts = products.map(product => product.price).filter(price => typeof price === 'number').reduce((acc, cur) => acc+cur, 0)

totalPriceOfProducts   // 27

const totalPriceOfProductsUsingReduce = products.reduce((acc, product) => {
                                                            const price = Number(product.price) || 0;

                                                            return acc + price
                                                        }, 0)
totalPriceOfProductsUsingReduce     // 27



function categorizeCountries(countries) {
    const patterns = {
      'land': [],
      'ia': [],
      'island': [],
      'stan': []
    };
  
    // Helper function to check if a country matches a pattern
    function matchesPattern(country, pattern) {
      return pattern(country.toLowerCase());
    }
  
    // Higher order function to categorize a country based on a pattern
    function categorizeCountry(country, pattern, category) {
      if (matchesPattern(country, pattern)) {
        patterns[category].push(country);
      }
    }
  
    // Categorize each country based on the patterns
    countries.forEach(country => {
      categorizeCountry(country, name => name.endsWith('land'), 'land');
      categorizeCountry(country, name => name.endsWith('ia'), 'ia');
      categorizeCountry(country, name => name.includes('island'), 'island');
      categorizeCountry(country, name => name.endsWith('stan'), 'stan');
    });
  
    // Return the array of categorized countries
    return patterns;
}
  
categorizeCountries(countries)   // Finland, IceLand.



// function startingLettersCountInArray(array){      // Just skipping this for now :-|
//     const firstLetter = {}

//     array.forEach(elements => {
//         const el = elements[0];            // SKIPPED PART
//         firstLetter[el] = [1]
//     })

//     return firstLetter
// }


const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'l', 'm', 'n', 'o', 'p']   // Tried Alphabets instead of Countries.

const filteredAlphabets = alphabets.filter(char=> alphabets.indexOf(char)<=9)

filteredAlphabets  //  [ "a", "b", "c", "d", "e", "f", "g", "h", "l", "m" ] First 10

const reversedAlphabets = [...alphabets].reverse()

const lastTenAlphabets = reversedAlphabets.filter(char => reversedAlphabets.indexOf(char)<=9).reverse()

lastTenAlphabets   // [ "d", "e", "f", "g", "h", "l", "m", "n", "o", "p" ] Last 10




/*
>>-------- L 3 V 3 L  3  --------------->
*/


const sortedCountriesByName = [...countriesData].sort((a, b)=> {
  if (a.name < b.name) return -1;

  if (a.name > b.name) return 1;

  return 0;
})

sortedCountriesByName  // Returns Array sorted by country's name.



function mostSpokenLanguages(countriesArray, count){

const languageCounts = {};

countriesArray.forEach(country => {

  country.languages.forEach(language => {
    if(languageCounts[language]){
      languageCounts[language]++;
    }else {
      languageCounts[language]=1;
    }
  })

})

const languageCountsArray = Object.keys(languageCounts).map(language => {
  return { country: language, count: languageCounts[language] }
})

const filteredArray = languageCountsArray.sort((a, b) => {
  if(a.count > b.count) return -1;

  if(a.count < b.count) return 1;

  return 0
}).splice(0, count)

return filteredArray

}

// mostSpokenLanguages(countriesData, 5)           RESULT:
                                              /*  { country: "English", count: 91 }
                                                  { country: "French", count: 45 }​
                                                  { country: "Arabic", count: 25 }
                                                  { country: "Spanish", count: 24 }
                                                  { country: "Portuguese", count: 9 }
                                              */


function findMostPopulatedCountries(countriesArray, count){

  const newArray = countriesArray.map(currentCountry => {
                                    return { country: currentCountry.name, 
                                            population: currentCountry.population }
                                  }).sort((a, b) => {
                                    if(a.population > b.population) return -1;

                                    if(a.population < b.population) return 1;

                                    return 0;
                                  });

  return newArray.splice(0, count)
}

findMostPopulatedCountries(countriesData, 5)    /* RESULT:
                                                  {country: 'China', population: 1377422166},
                                                  {country: 'India', population: 1295210000},
                                                  {country: 'United States of America', population: 323947000},
                                                  {country: 'Indonesia', population: 258705000},
                                                  {country: 'Brazil', population: 206135893},
                                                */


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
                                                
const statistics = {
  
  count(){
    return ages.length;
  },

  sum(){
    return ages.reduce((acc, cur) => acc+cur, 0)
  },

  min(){
    return Math.min(...ages);
  },


  max(){
    return Math.max(...ages)
  },

  sort(){
    return ages.sort((a, b) => {
      if(a > b) return 1;

      if(a < b) return -1;

      return 0
    })
  },

  range(){
    return Math.max(...ages) - Math.min(...ages)
  },

  mean(){
    return Math.round(this.sum() / this.count())
  },

  median(){
    const arr = [],
          arrayLength = this.sort().length,
          sortedArray = this.sort();

    if(arrayLength %2 !== 0){
      arr.push(sortedArray[Math.ceil(arrayLength/2-1)])

      return [...arr]
    }

    else if(arrayLength %2 === 0){
      arr.push(sortedArray[Math.ceil(arrayLength/2-1)], sortedArray[Math.ceil(arrayLength/2-1)+1])

      return [...arr].reduce((acc, cur) => acc+cur, 0)/2
    }

    return 'Error';
  },

  mode(){
    const sortedArray = this.sort();

    const frequency = sortedArray.reduce((freq, num) => {
      freq[num] = (freq[num] || 0) +1;
      return freq;
    }, {});

    const result = Object.keys(frequency).map(freq => {
      return { 'mode': freq, 'count': frequency[freq] }
    }).sort((a, b) => {

      if(a.count > b.count) return -1;
      if(a.count < b.count) return 1;
      return 0;
    }).slice(0, 1)

    
    return result[0];
  },

  var(){  // Variance
    const mean = this.mean();

    const sumSquaredDeviations = ages.reduce((sum, num)=> sum+Math.pow(num -mean, 2), 0)

    const variance = sumSquaredDeviations / ages.length;

    return variance
  },

  std(){  // Standard Deviation
    const variance = this.var()

    return Math.sqrt(variance).toFixed(1)
  }

  // Skipping Frequency Distribution
}

console.log(statistics.count())   // 25
console.log(statistics.sum())     // 744
console.log(statistics.range())   // 14
console.log(statistics.mean())    // 30
console.log(statistics.sort())    /* Returns sorted array
                                     Actually sorting an array is not
                                     mentioned in challenge, but i tried for myself
                                  */
                                  

console.log(statistics.median())  // 29

console.log(statistics.mode())    // { mode: "26", count: 5 }

console.log(statistics.var())     // 17.6
console.log(statistics.std())     // 2

