/*
>>-------- L 3 V 3 L  1  --------------->
*/
const x = [4, 5, 8, 9];
const y = [3, 4, 5, 7];
const threeCountries = ['Finland', 'Sweden', 'Norway']
const numbersInWords = ['one', 'two', 'three', 'four', 'five'];

const emptySet = new Set()  // Empty Set {}

for(let i=1; i<=10; i++){
    emptySet.add(i)
}

console.log(emptySet)  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] - emptySet is now not a Empty Set!

emptySet.delete(1)    // 1 has been removed from set

emptySet.clear()      // [] - Values has been cleared, Now it's a real Empty Set.

const numberInWordsSet = new Set(...[numbersInWords]);  // [ "one", "two", "three", "four", "five" ]

const superArr = threeCountries.map(country => {
    return {[country]: country.length}              // Returns as property and value in form of an Object
})                                              /*
                                                    { Finland: 7 }
                                                    { Sweden: 6 }
                                                    { Norway: 6 }
                                                */


/*
>>-------- L 3 V 3 L  2  --------------->
*/

const a = new Set([10, 20, 30, 40, 50])
const b = new Set([30, 40, 50, 60, 70])

const C = new Set([...a, ...b])

// console.log(C)    //  [ 10, 20, 30, 40, 50, 60, 70 ] - Duplicates are not Allowed.

const aIntersectionB = [...a].filter(a => b.has(a));  // Returns values only if true

// console.log(aIntersectionB)  // [ 30, 40, 50 ]

const aDifferenceB = [...a].filter(a => !b.has(a));

// console.log(aDifferenceB)   // [ 10, 20 ]



/*
>>-------- L 3 V 3 L  3  --------------->
*/


function findHowManyLanguagesInCountries(){

    const countryKeys = Object.keys(countries);
    const languages = [];
    
    countryKeys.forEach(country => {
        languages.push(...[...countries[country].languages])
    })


    const languagesInSet = new Set();

    languages.forEach(language => languagesInSet.add(language))


    return `There are ${languagesInSet.size} languages`
}

findHowManyLanguagesInCountries()     // There are 112 languages


function findMostSpokenLanguage(count){
    const languagesCount = {};

    countries.forEach(country => {
        country.languages.forEach(language => {
            if(languagesCount[language]){
                languagesCount[language]++;
            }
            else {
                languagesCount[language]=1;
            }
        })
    })


    const mostSpokenLanguages = Object.keys(languagesCount).sort((a, b) => {
        
        if(languagesCount[a] > languagesCount[b]) return -1;
        if(languagesCount[a] < languagesCount[b]) return 1;

        return 0;   // First sorts the array based on counts (Most spoken languages)
    }).map(language => {
        return { [language] : languagesCount[language] }    // then returned as { countryName: languagesCount }
    })  


    return mostSpokenLanguages.slice(0, count);     
}

findMostSpokenLanguage(5)       /*  { English: 91 },
                                    { French: 45 },
                                    { Arabic: 25 },
                                    { Spanish: 24 },
                                    { Russian: 9 },
                                    { Portuguese: 9 }
                                */
