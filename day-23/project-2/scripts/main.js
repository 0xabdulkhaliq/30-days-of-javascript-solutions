const wrapperDiv = document.querySelector('.wrapper'),
      keyConveyer = wrapperDiv.querySelector('h3'),
      keyCodeConveyer = wrapperDiv.querySelector('div')

document.addEventListener('keydown', (e)=>{
  const key = e.key,
        keyCode = e.keyCode;
  keyConveyer.classList.add('btn--clicked')
  keyConveyer.innerHTML = `You Pressed <span>${key}</span>`
  keyCodeConveyer.textContent = keyCode
})

keyConveyer.addEventListener('transitionend', (e)=>{
  keyConveyer.classList.remove('btn--clicked')
})