countries    // "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "India", … 

webTechs     // "HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"


countries.includes('Ethiopia') === true
                                   ? console.log('ETHIOPIA')
                                   : countries.push('Ethiopia');


webTechs.includes('Sass') === true
                              ? console.log('SASS')
                              : webTechs.push('Sass');
                            
webTechs     // "HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB", "Sass"                         


const fullStack = frontEnd.concat(backEnd)

fullStack    // "HTML", "CSS", "JavaScript", "React", "Redux", "Node", "Express", "MongoDB"


const ages = [
    19, 22,
    19, 24,
    20, 25,
    26, 24,
    25, 24
]

ages.sort()           // Sorted Array [19, 19, 20, 22, 24, 24, 24, 25, 25, 26] 

Math.min(...ages)                   // 19 (Min age)

Math.max(...ages)                   // 26 (Max age) 

let totalAges = 0;
ages.forEach(age => totalAges+=age );

totalAges                                 // 228  (Total)

let averageAge = totalAges / ages.length
averageAge                                // 22.8 (Average age)

Math.max(...ages) - Math.min(...ages)     // 7    (Range of age)

let minComparedWithAverage = (Math.min(...ages) - averageAge)
let maxCompatedWithAverage = (Math.max(...ages) - averageAge)

Math.abs(minComparedWithAverage)    // 3.8000000000000007
Math.abs(maxCompatedWithAverage)    // 3.1999999999999993

countries.slice(0, 10)       //  "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "India" 

function findCenterIndex(){
    return Math.ceil(countries.length/2)-1
}
countries[findCenterIndex()];  // Finland

let newArray = [
    countries.slice(0, countries.length/2), 
    countries.slice(countries.length/2, countries.length)
]

newArray        // [ "Albania", "Bolivia", "Canada", … ], [ "Germany", "Hungary", "Ireland", … ]