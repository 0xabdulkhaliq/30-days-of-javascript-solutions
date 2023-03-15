/*
>>-------- L 3 V 3 L  1  --------------->
*/

console.group('Display\s countries array as a Table');   // Groups the result
console.table(countries)
console.groupEnd()

console.group('Display\s countries object as a Table');  // Groups the result
countries.forEach(country => console.table(country))
console.groupEnd()



/*
>>-------- L 3 V 3 L  2  --------------->
*/

console.assert(10 > 2*10) // Asserts if condition returns False.

console.warn('Warning: Which rises when something has been occured incorrectly')

console.error('Error: Which rises when something crashes')



/*
>>-------- L 3 V 3 L  3  --------------->
*/

const countriesData = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  

let i=0,    // Used for While loop
    arrayLength = countriesData.length-1;   // Used for While & For loops


console.group('While Loop');    // Groups the result
console.time('While loop');
while(i<=arrayLength){
    console.log(countriesData[i][0], countriesData[i][1])
    i++
};
console.groupEnd()
console.timeEnd('While loop')   // While loop: 9ms - timer ended



console.group('For Loop');      // Groups the result
console.time('For loop');
for(let i=0; i<=arrayLength; i++){
    console.log(countriesData[i][0], countriesData[i][1])
}
console.groupEnd();
console.timeEnd('For loop');    // For loop: 3ms - timer ended



console.group('For of Loop');   // Groups the result
console.time('For of loop');
for (const country of countriesData) {
    console.log(country[0], country[1])
}
console.groupEnd();
console.timeEnd('For of loop');  // For of loop: 12ms - timer ended



console.group('For Each');      // Groups the result
console.time('For Each');
countriesData.forEach(country =>   
              console.log(country[0], country[1]));
console.groupEnd();
console.timeEnd('For Each');    // For Each: 2ms - timer ended

