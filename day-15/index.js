
/*
>>-------- L 3 V 3 L  1  --------------->
*/

class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    eat(){      // Method
        return `${this.name} is eating food`
    }

    get animalInfo(){   // Getter
        return `${this.name} is ${this.age} years old. It is ${this.color} in color and it has ${this.legs} legs`
    }

    set setAnimalAge(age){  // Setter for Age because age is increased every year
        this.age = age
    }
}

const rajapalayamDog = new Animal('Rajapalayam', '8', 'white', '4');

rajapalayamDog.animalInfo   // Rajapalayam is 8 years old. It is white in color and it has 4 legs

rajapalayamDog.setAnimalAge = 10    // Set Age to 10 from 8

rajapalayamDog.age // Age: 10



/*
>>-------- L 3 V 3 L  2  --------------->
*/

class Dog extends Animal {
    constructor(name, age, color, gender, breed, legs = 4){
        super(name, age, color, legs);
        this.gender = gender;
        this.breed = breed;
    }

    eat(){
        return `${this.name} is eating meat`
    }

    get getAnimalInfo(){
        return `${this.name} is a ${this.age} years old ${this.color} colored ${this.gender} dog from ${this.breed} breed` 
    }
}

const kombanDog = new Dog('Komban', 7, 'black', 'male', 'Kombi')

kombanDog.eat()    // Komban is eating meat
kombanDog.getAnimalInfo    // Komban is a 7 years old  black colored male dog from Kombi breed



/*
>>-------- L 3 V 3 L  3  --------------->
*/

class Statistics {
    constructor(ages){
        this.ages = ages
    }

    count(){
        return this.ages.length
    }

    sum(){
        const sumOfNumbers = this.ages.reduce((acc, cur) => acc+cur, 0)
        return sumOfNumbers;
    }

    min(){
        return Math.min(...this.ages)
    }

    max(){
        return Math.max(...this.ages)
    }

    sort(){
        return this.ages.sort((a, b) => {
            if(a>b) return 1;
            if(a<b) return -1;
            return 0
        })
    }

    range(){
        const sortedArray = this.sort(),
              range = sortedArray[sortedArray.length-1] - sortedArray[0]
        
        return range
    }

    mean(){
        const sum = this.sum(),
              count = this.count(),
              mean = Math.ceil(sum / count);
        
        return mean
    }

    median(){
        const count = this.count(),
              sortedArray = this.sort(),
              oddOrEven = count %2 === 0;

        let median;
        
        if(oddOrEven){
            median = sortedArray[count/2] - sortedArray[count/2+1]
        } else if(oddOrEven === false){
            median = sortedArray[Math.ceil(count/2)-1]
        }

        return median;
    }

    mode(){
        const count = this.count,
              sortedArray = this.sort();
              
        let seperatedArray = [];
        
        let sentence = sortedArray.join();

        seperatedArray = sortedArray.map(num => {
            const regEx = new RegExp(num, 'g');
            return {
                mode: num,
                count: sentence.match(regEx).length
            }
        })

        const mode = seperatedArray.sort((a, b)=>{
            if(a.count>b.count) return -1;
            if(a.count<b.count) return 1;
            return 0
        })

        return mode[0]
    }

    var(){      // Unfortunately i can't make this right
        const mean = this.mean();

        const squareDifference = this.ages.map(num => (num-mean)*(num-mean))

        const sumOfSquareDifference = squareDifference.reduce((acc, cur) => acc+cur, 0)

        return sumOfSquareDifference/this.count();
    }

    std(){
        return Math.sqrt(this.var()).toPrecision(2)
    }
}

const statistics = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2


/*
Day 15 Challenges has not been completed.
(gonna complete it tomorrow)
*/