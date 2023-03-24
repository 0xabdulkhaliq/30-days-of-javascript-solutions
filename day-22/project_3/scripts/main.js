console.log(asabenehChallenges2020)

const keysOfObject = Object.keys(asabenehChallenges2020);

const mainWrapperElement = document.querySelector('main')

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

    const topicWrapper = document.createElement('div')
          topicWrapper.classList.add('wrapper__btm', 'wrapper__btm--disabled')

    challengeData[challengeObjectKeys[1]].forEach(topic => {
        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = topic
        topicWrapper.appendChild(paragraphElement)
    })

    headingsWrapperContainer.innerHTML = '<img src="./icon-arrow-down.svg" alt="">'
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
        } else {

            e.target.previousSibling.classList.toggle('img--active')
            e.target.parentNode.nextSibling.classList.toggle('wrapper__btm--disabled')
        }
    })
})
