const buttonElements = document.querySelectorAll('button');

// buttonElements.forEach(button => {
//   button.addEventListener('click', (e)=>{
//     console.log(e.target.value)


//   })
// })

function findTenMostPopulatedCountries(){
  const tenMostPopulatedCountries = Object.keys(countries_data).map(key => {
    const country = countries_data[key]
  
    return {
      name: country.name,
      population: country.population,
    }
  }).sort((a, b)=> {
    if (a.population > b.population) return -1
    if (a.population < b.population) return 1
    return 0
  }).splice(0, 10)

  return tenMostPopulatedCountries
}


function findTenMostSpokenLanguages(){

  const filteringLanguages = new Set()

  Object.keys(countries_data).forEach(key => {
    countries_data[key].languages.forEach(lang => filteringLanguages.add(lang))
  })

  const languagesWithCount = Array.from(filteringLanguages).reduce((acc, cur) => {
    acc[cur] = {
      language: cur,
      count: 0
    }
    return acc
  }, {})

  Object.keys(countries_data).forEach(key => {
    countries_data[key].languages.forEach(lang => {
        if(languagesWithCount[lang].language === lang) languagesWithCount[lang].count++
    })
  })

  const tenMostSpokenLanguages = Object.keys(languagesWithCount).map(key => languagesWithCount[key]).sort((a, b)=> {
    if (a.count>b.count) return -1
    if (a.count<b.count) return 1
    return 0
  }).splice(0, 10)

  return tenMostSpokenLanguages
}