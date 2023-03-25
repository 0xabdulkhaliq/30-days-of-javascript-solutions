const evenColor = '#21BF73',
      oddColor = '#FDDB3A',
      primeColor = '#FD5E53';

const wrapperDiv = document.querySelector('.wrapper')


let totalCount = 100

for(let i=0; i<=totalCount; i++){
    const divElement = document.createElement('div')

    if(i%2===0) divElement.style.background = evenColor;

    if(i%2!==0) divElement.style.background = oddColor;

    divElement.textContent = i;
    wrapperDiv.appendChild(divElement);
}


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

const generatedPrimeNumbers = generatePrimes(totalCount)

generatedPrimeNumbers.forEach(prime => {
    wrapperDiv.children[prime].style.background = primeColor
})
