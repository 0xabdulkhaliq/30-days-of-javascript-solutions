const evenColor = '#21BF73',
      oddColor = '#FDDB3A',
      primeColor = '#FD5E53';

const wrapperDiv = document.querySelector('.wrapper')


function generateNumbers(e){
  const numbersToGenerate = document.querySelector('input').value,
        errorPrompter = document.querySelector('.error-prompter')
  
  // Empties the error message at every submit
  errorPrompter.textContent = ''

  // Returns the error message if the input is empty or submitted with other charecters(!number)
  if(numbersToGenerate === '') return errorPrompter.textContent = 'Please enter a number'

  // Removing child elements before appending new child elements
  wrapperDiv.innerHTML = ''

  // First, Generates odd & even number and appends to wrapper element
  for(let i=0; i<=numbersToGenerate; i++){
    const divElement = document.createElement('div')

    if(i%2===0) divElement.style.background = evenColor;

    if(i%2!==0) divElement.style.background = oddColor;

    divElement.textContent = i;
    wrapperDiv.appendChild(divElement);
  }

  // Then the primes are generated and stored in an array
  function generatePrimes(count) {
      const primes = [];
      for (let i = 2; i <= count; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          primes.push(i);
        }
      }
      return primes;
  }
  // Assigning returned array to a variable
  const generatedPrimeNumbers = generatePrimes(numbersToGenerate)

  /* Looping through each prime number and modifying 
     the background color of each child element with it's prime index
  */
  generatedPrimeNumbers.forEach(prime => {
      wrapperDiv.children[prime].style.background = primeColor
  })
   
}