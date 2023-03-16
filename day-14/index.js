// There is no challenges provided for Day 14

const pi = 3.14
try {
     pi = 5.1
} catch (error){
    console.log(error)
} finally {
    console.log(`Pi value is ${pi}`)
}

let num1 = 5,
    num2 = null;

try {
    if (num2 !== Number) throw 'Number 2 value is not a integer value';

    const total = num1+num2;
} catch(error){
    console.log(error)
}
