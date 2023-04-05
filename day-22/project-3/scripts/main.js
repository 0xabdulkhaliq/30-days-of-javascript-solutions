function getRandomColor(){
    const colorCodesLength  = colorCodes.length
    return colorCodes[Math.floor(Math.random()*colorCodesLength)]
}

function generateDateAndTime(){
    const dateObject = new Date()

    const month = dateObject.toLocaleString('default', {month: 'long'}),
          day = dateObject.getDate(),
          year = dateObject.getFullYear(),
          time = dateObject.toLocaleTimeString().slice(0,7)

    const generatedResult = `${month} ${day},${year} ${time}`

    return generatedResult;
}

const timeDisplayer = document.querySelector('.display-date-time'),
      yearElement = document.querySelector('span');

setInterval(()=>{
    timeDisplayer.textContent = generateDateAndTime()
    timeDisplayer.style.background = getRandomColor()
    yearElement.style.color = getRandomColor()
}, 1000)


const keysOfObject = Object.keys(asabenehChallenges2020);

const mainWrapperElement = document.querySelector('.challenges__wrapper')

const challengeObject = asabenehChallenges2020[keysOfObject[6]]


challengeObject.forEach(challengeData => {
    const challengeObjectKeys = Object.keys(challengeData);

    const wrapperContentContainer = document.createElement('div')
          wrapperContentContainer.classList.add('wrapper__content-container')

    const headingsWrapperContainer = document.createElement('div')
          headingsWrapperContainer.classList.add('wrapper__top')

    const level3HeadingElement = document.createElement('h3')
          level3HeadingElement.textContent = challengeData[challengeObjectKeys[0]]

    const statusIndicatingParagraphElement = document.createElement('p')
          statusIndicatingParagraphElement.textContent = challengeData[challengeObjectKeys[3]]
    
    if(challengeData[challengeObjectKeys[3]] === 'Done') wrapperContentContainer.style.background = 'var(--bg-green)'
    if(challengeData[challengeObjectKeys[3]] === 'Ongoing') wrapperContentContainer.style.background = 'var(--bg-yellow)'
    if(challengeData[challengeObjectKeys[3]] === 'Coming') wrapperContentContainer.style.background = 'var(--bg-red)'

    const topicWrapper = document.createElement('div')
          topicWrapper.classList.add('wrapper__btm', 'wrapper__btm--disabled')

    challengeData[challengeObjectKeys[1]].forEach(topic => {
        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = `• ${topic}`
        topicWrapper.appendChild(paragraphElement)
    })

    headingsWrapperContainer.innerHTML = '<img src="./images/icon-arrow-down.svg" alt="">'
    headingsWrapperContainer.append(level3HeadingElement, statusIndicatingParagraphElement)

    wrapperContentContainer.append(headingsWrapperContainer, topicWrapper)

    mainWrapperElement.append(wrapperContentContainer)
});


const nodeListOfChallengesContainers = document.querySelectorAll('.wrapper__content-container')

nodeListOfChallengesContainers.forEach(element => {
    element.addEventListener('click', (e)=>{
        
        if(e.target.parentNode.classList.contains('wrapper__content-container')){

            e.target.parentNode.lastChild.classList.toggle('wrapper__btm--disabled')
            e.target.children[0].classList.toggle('img--active')
        } else if(e.target.alt === ''){
            e.target.parentNode.parentNode.lastChild.classList.toggle('wrapper__btm--disabled')
            e.target.classList.toggle('img--active')
        } else {
            e.target.previousSibling.classList.toggle('img--active')
            e.target.parentNode.nextSibling.classList.toggle('wrapper__btm--disabled')
        }
    })
})


const authorDetailsContainer = document.querySelector('.author-details__wrapper'),
      authorDetailsInObject = asabenehChallenges2020[keysOfObject[5]],
      authorDetailsKeysFromObject = Object.keys(authorDetailsInObject)


const authorName = authorDetailsContainer.querySelector('h2'),
      authorSocialLinks = authorDetailsContainer.querySelectorAll('a'),
      authorAbout = authorDetailsContainer.querySelector('.author-details__about'),
      authorStats = authorDetailsContainer.querySelectorAll('ul'),
      authorKeywords = authorDetailsContainer.querySelector('.keywords__container')


authorName.textContent = `${authorDetailsInObject['firstName']} ${authorDetailsInObject['lastName']}`
authorAbout.textContent = authorDetailsInObject['bio']

const socialLinksFromObject = authorDetailsInObject['socialLinks'].slice(0,3)
let loopIndex = 0

authorSocialLinks.forEach(link => {
    link.setAttribute('href', socialLinksFromObject[loopIndex].url)
    loopIndex++;
})

authorDetailsInObject['titles'] = authorDetailsInObject['titles'].map(el => el.join(' '))
const statsKeys = ['titles', 'skills', 'qualifications']
loopIndex = 0
authorStats.forEach(stats => {

    authorDetailsInObject[statsKeys[loopIndex]].forEach(keys => {
        const listElement = document.createElement('li')
        listElement.textContent = keys
        stats.appendChild(listElement)
    })
    loopIndex++;
})

asabenehChallenges2020['keywords'].forEach(keyword => {

    const paragraphElement = document.createElement('p')
    paragraphElement.textContent = '#'+keyword
    paragraphElement.style.background = getRandomColor()
    authorKeywords.append(paragraphElement)
})

