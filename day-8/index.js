
/*
--------  L 3 V 3 L - 1  ----------------------
*/

const dogObject = {
    name: 'Golden retriever',
    legs: 'four',
    age: 5,
    bark: ()=>{
        return 'Woof woof';
    }
}

// console.log(dogObject)

dogObject.breed = 'Golden';

dogObject.getDogInfo = function() {
    return `Dog Name: ${this.name}, from ${this.breed} breed`;
}

dogObject.getDogInfo()  // Dog Name: Golden retriever, from Golden breed




/*
--------  L 3 V 3 L - 2  ----------------------
*/

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}



function findUserWithManySkills(users){


    // Creates an Array of Keys from Users Object
    const copyOfUserArray = Object.keys(users);


    // Collects users skill count
    const arrayOfUserSkills = [];

    // Pushes skill count of every single User
    copyOfUserArray.forEach(user => arrayOfUserSkills.push(users[user].skills.length))

    // 1. Finds the highest number (highest skill count)
    // 2. Finds the index of the score
    // 3. Using the above index to fetch user in Users object
    const userWithMoreSkills = copyOfUserArray[arrayOfUserSkills.indexOf(Math.max(...arrayOfUserSkills))]

    return userWithMoreSkills;
}

// console.log(findUserWithManySkills(users))

console.log()


function isUserOnline(users){


  // Creates an Array of Keys from Users Object
  const copyOfUserArray = Object.keys(users);


  // Collects users skill count
  const userScoreCollector = [];

  // Pushes skill count of every single User
  copyOfUserArray.forEach(user => userScoreCollector.push(users[user].isLoggedIn))

  const loggedInUsers = []

  for(let i=0; i<userScoreCollector.length; i++){
     if(userScoreCollector[i] === true) {
       loggedInUsers.push(copyOfUserArray[i])
     }
  }

  return loggedInUsers;   // [ "Brook", "John" ]
}

// isUserOnline(users)


function findUserWith50PointsAndAbove(users){


  // Creates an Array of Keys from Users Object
  const copyOfUserArray = Object.keys(users);


  // Collects users skill count
  const userScoreCollector = [];

  // Pushes skill count of every single User
  copyOfUserArray.forEach(user => userScoreCollector.push(users[user].points))

  const usersWith50PointsAndAbove = []

  for(let i=0; i<userScoreCollector.length; i++){
     if(userScoreCollector[i] >= 50) {
       usersWith50PointsAndAbove.push(copyOfUserArray[i])
     }
  }

  return usersWith50PointsAndAbove;
}

// findUserWith50PointsAndAbove(users)     // [ "Asab", "Brook", "John" ]

console.log(users['Asab'].skills.includes('MongoDB', 'Express', 'React', 'Node'));  



function findMernStackDeveloper(users){


  // Creates an Array of Keys from Users Object
  const copyOfUserArray = Object.keys(users);


  // Collects users skill count
  const mernStackDevelopers = [];

  const mernStack = [ 'MongoDB', 'Express', 'React', 'Node'];

  // Pushes skill count of every single User
  copyOfUserArray.forEach(user => {
    let userSkills = users[user].skills;

    if(mernStack.every(tech => userSkills.includes(tech))){
      mernStackDevelopers.push(user)
    }
  })

  console.log(mernStackDevelopers)

}

// findMernStackDeveloper(users)     // [ "Asab", "Paul" ]



/* I'm gonna set my name in the user's object without
   modifying the original users object by copying its
   contents to a new object

   We can do that by two methods
    1. Object.assign({}, originalObject). 
       Using Object.assign() and passing an empty object as 
       the first argument and the originalObject as the second argument. 
       The Object.assign() method returns a new object with the properties 
       of the original object copied into it

    2. {...originalObject}
       Using the spread operator ()...) and passing the originalObject. 
       The spread operator creates a new object with the properties 
       of the original object copied into it.

  For now i'll use spread operator (personal preference)
*/

const newUsersObject = {...users}

newUsersObject['Abdul Khalid'] = new Object() // Adds a New property to Users object
                                              // without modifying the original

const keysOfUsersObject = Object.keys(users)  // Collect keys(Properties) from the Users Object
                                              // [ "Alex", "Asab", "Brook", "Daniel", "John", "Thomas", "Paul" ]


keysOfUsersObject.forEach(keys => users[keys])  // Gets Property's values from user object


const countries = {
  countryName: 'India',
  capital: 'Delhi',
  population: '8 Billion',
  languages: 'More than 55 languages were spoken',
  getInformation: function (){
    return `${this.countryName} is a country with more than ${this.population}, it is a capital of ${this.capital} and ${this.languages}`
  }
}

countries.getInformation()


const personAccount = {
  firstName: 'Abdul',
  lastName: 'Khalid',
  incomes: {
    activeIncome: 10000,
    passiveIncome: 10000
  },
  expenses: {
    rent: 5000,
    food: 3000
  },
  totalIncome(){
    return this.incomes.activeIncome+this.incomes.passiveIncome
  },
  totalExpense(){
    return this.expenses.rent+this.expenses.food
  },
  accountInfo(){
    return `Name: ${this.firstName} ${this.lastName}
            Total Incomes: ${this.totalIncome()}
            Total Expenses: ${this.totalExpense()}`
  },
  addIncome(typeOfIncome, incomeAmount){
    return this.incomes[typeOfIncome] = incomeAmount
  },
  addExpense(nameOfExpense, expenseAmount){
    return this.expenses[nameOfExpense] = expenseAmount
  },
  accountBalance(){
    return this.totalIncome() - this.totalExpense()
  }
}

personAccount.addIncome('youtube', 1000)    // We can add, retrieve the 
personAccount.addExpense('broadBand', 500)  // data from the object effectively


/*
--------  L 3 V 3 L - 3  ----------------------
*/

const userAccounts = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
];




function generateCurrentDateAndTime(){

  const dateObject = new Date()

  function singleToDualDigit(digit){
    return digit < 10 ? `0${digit}` : digit
  }

  function twelveHoursFormatter(time){
    return singleToDualDigit(time >= 12 ? 1 : time)
  }

  function amOrPm(){
     const time = dateObject.getHours
     return time >=12 ? 'PM' : 'AM'
   }



  let formattedString = 'YYYY/MM/DD HH:mm'
                          .replace('YYYY', dateObject.getFullYear())
                          .replace('MM', singleToDualDigit(dateObject.getMonth()+1))
                          .replace('DD', singleToDualDigit(dateObject.getDate()))
                          .replace('HH', twelveHoursFormatter(dateObject.getHours()))
                          .replace('mm', singleToDualDigit(dateObject.getMinutes()))

  return `${formattedString} ${amOrPm()}`;
} 


function fetchUserIds(userId){

  let userIdsIndex = Object.keys(userAccounts),
  userIdCollection = []

  userIdsIndex.forEach(idsIndex => {
    userIdCollection.push(userAccounts[idsIndex]._id)
  })

  if(userIdCollection.includes(userId)) return userIdCollection.indexOf(userId)

  return false;
}

function fetchUserPassword(userId){
  return userAccounts[fetchUserIds(userId)].password
}


function signUp(userId, userName, userMail, userPassword){

  if(fetchUserIds(userId) !== false) return 'User already has an Account, Please Sign In to Continue'
  
  userAccounts.push({
    _id: userId,
    username: userName,
    email: userMail,
    password: userPassword,
    createdAt: generateCurrentDateAndTime(),
    isLoggedIn: true
  });

  return userAccounts
}

signUp('4CH31V3R', 
        '0xabdulkhalid', 
        '0xabdulkhalid@gmail.com', 
        '5U73R_53CR3T')

/*
 {                    // RESULT
    _id: "4CH31V3R"
    createdAt: "2023/03/10 01:29 AM"
    email: "0xabdulkhalid@gmail.com"
    isLoggedIn: true
    password: "5U73R_53CR3T"
    username: "0xabdulkhalid"
 }
*/


function userSignIn(userId, password){
 
  if(fetchUserIds(userId) === false) return 'User ID Not Found, Please Sign Up to Continue'

  if(fetchUserPassword(userId) === password){
    userAccounts[fetchUserIds(userId)].isLoggedIn = true;
  }

  const userName = userAccounts[fetchUserIds(userId)].username

  return `${userName} has Signed in successfully`
}

userSignIn('4CH31V3R', '5U73R_53CR3T')





const products = [
  {
    _id: 'eedfcf',
    name: 'Smartphone',
    description: 'NOKIA 8',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]



function isProductAvailable(product){

  let productsIndex = Object.keys(products),
      productsCollection = []

  productsIndex.forEach(idsIndex => {
    productsCollection.push(products[idsIndex].name)
  })

  if(productsCollection.includes(product)) return productsCollection.indexOf(product)

  return false;
}


function rateProduct(userId, productToRate ,ratings){

  let userIdIndex = fetchUserIds(userId),
      productIndex = isProductAvailable(productToRate)

  if(userIdIndex===false) return 'Please sign up to continue'

  if(productIndex === false) return 'The Product is Not Available to Rate'

  return products[productIndex].ratings.push({
    'userId': userId,
    'rate': ratings
  })
}

rateProduct('4CH31V3R', 'Smartphone', 5)

products   // New Rating has been added { userId: "4CH31V3R", rate: 5 } to Smartphone





function findAverageRating(product){
  const productIndex = isProductAvailable(product);

  if(productIndex === false) return 'The Product you selected has not found'

  const ratingIndex = Object.keys(products[productIndex].ratings),
        totalRatings = [];

  let  averageRatings = 0;

  ratingIndex.forEach(index => {
    totalRatings.push(products[productIndex].ratings[index].rate)
  })

  totalRatings.forEach(rating => averageRatings+=rating)
  
  const result = (averageRatings / totalRatings.length).toFixed(1)

  return result
}


findAverageRating('Smartphone')  // 4.8





function likeProduct(userId, product){
  const productIndex = isProductAvailable(product);

  if(productIndex === false) return 'The Product you selected has not found'

  const likesIndex = Object.keys(products[productIndex].ratings);


  likesIndex.forEach(index => {
    const likesArray = products[index].likes
    if(products[index].name === product){
       if(likesArray.includes(userId)){
          likesArray.splice(likesArray.indexOf(userId), 1)
          return;
       }
       likesArray.push(userId)
       return;
    }
  })

}

likeProduct('4CH31V3R', 'Smartphone')    // Like was added
likeProduct('4CH31V3R', 'Smartphone')    // Like was removed
