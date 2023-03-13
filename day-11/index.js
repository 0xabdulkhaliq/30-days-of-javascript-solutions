
/*
>>-------- L 3 V 3 L  1  --------------->
*/


const constants = [2.72, 3.14, 9.81, 37, 100]

const fiveCountries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

e, pi, gravity, humanBodyTemp, waterBoilingTemp;   // 2.72 3.14 9.81 37 100

const [fin, est, swe, den, nor] = fiveCountries;

fin, est, swe, den, nor   // Finland Estonia Sweden Denmark Norway

let {width, height, area, perimeter} = rectangle;

width, height, area, perimeter;   // 20 10 200 60




/*
>>-------- L 3 V 3 L  2  --------------->
*/


console.log(...[...users])  // Destructured

const usersWithLessThanTwoSkills = users.filter(user => user.skills.length < 2);
                                  // { name: "John", scores: 85, age: 25, … }



/*
>>-------- L 3 V 3 L  3  --------------->
*/

countriesData.forEach( country => {
  console.log(`Name: ${country.name}, Capital: ${country.capital}, Population: ${country.population}, Languages: ${country.languages}`)
})  // Destructures the complete objects from array


const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

const [name, skills, jsScore, reactScore] = student
console.log(name, skills, jsScore, reactScore)    // David (4) [ "HTM", "CSS", "JS", "React" ] (4) [ 98, 85, 90, 95 ]

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArayToObject(array){
  const convertedArray = []

  students.forEach(student => {
    const [name, skills, scores] = student;

    convertedArray.push({
      name: name,
      skills: skills,
      scores: scores
    })
  })
  return convertedArray
}

convertArayToObject(students)  // Array has been converted into Object with key value pairs


const studentObject = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudentObject = {...studentObject}  // Copied the Object without Mutating it

const studentSkillKeys = Object.keys(newStudentObject.skills);
const skillSet = [['Bootstrap', 8], ['Express', 9], ['SQL', 8], 'SQL'];


for(let i=0; i<skillSet.length; i++){
  if(skillSet[i].length==2){
    const [skill, level] = skillSet[i]
    newStudentObject.skills[studentSkillKeys[i]].push({
      skill: skill,
      level: level
    })
  }
  else {
    newStudentObject.skills[studentSkillKeys[i]].push(skillSet[i])
  }
}

newStudentObject    // Now the changes occured in this Object will not
                    // affect the original Object because we avoided mutations 