
/*
>>-------- L 3 V 3 L  1  --------------->
*/

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const skillsInJSON = JSON.stringify(skills)

console.log(skillsInJSON)

let age = 18; // Number
console.log(JSON.stringify(age)) // String

let isMuslim = true; // bool
console.log(JSON.stringify(isMuslim))   // String

const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const studentInJSON = JSON.stringify(student)
// {"firstName":"Asabeneh","lastName":"Yetayehe","age":250,"isMarried":true,"skills":["HTML","CSS","JS","React","Node","Python"]} Stringified



/*
>>-------- L 3 V 3 L  2  --------------->
*/

const studentInJSON2 = JSON.stringify(student, (key, value)=>{
    if(key === 'age' || key === 'isMarried') return;

    return value
})

studentInJSON2  // {"firstName":"Asabeneh","lastName":"Yetayehe","skills":["HTML","CSS","JS","React","Node","Python"]}



/*
>>-------- L 3 V 3 L  3  --------------->
*/

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

const txtToObject = JSON.parse(txt)   // Object { Alex: {…}, Asab: {…}, Brook: {…}, Daniel: {…}, John: {…}, Thomas: {…}, Paul: {…} }
                                      // String is converted into an Object with Multiple Key and Value pairs.


const userWithManySkills = Object.keys(txtToObject).map(key => {  // Map through all objects with keys and returns it to sort()
                                            return {
                                                name: key,
                                                skills: txtToObject[key].skills
                                            }
                                            }).sort((a,b) => {  // Sorts array with skill's length(count) in descending order
                                                if(a.length > b.length) return -1;
                                                if(a.length < b.length) return 1;
                                                return 0
                                            }).slice(0, 1)[0].name  // Slices First element from array, returns as array with one element
                                                                    // then we use [0]'th index & 'name' key to directly get the name of the user
                                                                    // who has many skills
console.log(userWithManySkills)     // Alex