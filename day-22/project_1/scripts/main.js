const evenColor = '#21BF73',
      oddColor = '#FDDB3A',
      primeColor = '#FD5E53';

const wrapperDiv = document.querySelector('.wrapper')


for(let i=0; i<=100; i++){
    const divElement = document.createElement('div')

    if(i%2===0) divElement.style.background = evenColor;

    if(i%2!==0) divElement.style.background = oddColor;

    divElement.textContent = i;
    wrapperDiv.appendChild(divElement);
}