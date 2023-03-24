const wrapperDiv = document.querySelector('.countries-wrapper')

const totalCountriesDisplayElement = document.querySelector('#total-countries');

totalCountriesDisplayElement.textContent = `Total Number of Countries: ${countries.length}`

countries.forEach(country => {
    const divElement = document.createElement('div')

    divElement.textContent = country;
    wrapperDiv.appendChild(divElement);
    
});
