const everyInputElement = document.querySelectorAll('input')

const regExps = [/^[0-9a-zA-Z]{3,15}$/, 
                /^[0-9a-zA-Z]{3,15}$/,                                              // Name
                /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/,           // Email
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,  // Password
                /^\+?\d{1,3}[-\s]?\d{1,3}[-\s]?\d{4}$/,                             // Telephone
                /^[a-zA-Z0-9,.'"\s-]{10,}$/                                        // Bio    
            ]

let index = 0

everyInputElement.forEach(inputElement => {

    const currentRegExp = regExps[index]

    inputElement.addEventListener('keyup', (e)=>{
        const value = e.target.value

        if(currentRegExp.test(value)) return e.target.nextElementSibling.classList.add('main__input-error-prompter--disabled')

        e.target.nextElementSibling.classList.remove('main__input-error-prompter--disabled')
    })


    ++index
})


index = 0



function isValidationPassed(){
    const errorPrompters = document.querySelectorAll('.main__input-error-prompter')
    const validationSuccessCount = []

    errorPrompters.forEach(prompter => {
        const ifTrue = prompter.classList.contains('main__input-error-prompter--disabled')
        const currentInputElement = everyInputElement[index]

        if(ifTrue && currentInputElement.value !== '') {
            validationSuccessCount.push(ifTrue)
        } else {
            prompter.classList.remove('main__input-error-prompter--disabled')
        }

        console.log(currentInputElement.value)

        console.log(prompter.classList)

        ++index
    })

    index = 0

    return validationSuccessCount.length === 6
}

const confirmOverlayContainer = document.querySelector('.main__form-overlay')
const confirmExitBtn = document.querySelector('.main__confirm-exit-btn')

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()

    if(isValidationPassed()) return confirmOverlayContainer.classList.remove('main__form-overlay--disabled')

})

confirmExitBtn.addEventListener('click', (e)=>{
    console.log(e.target)
    console.log(confirmOverlayContainer)
    confirmOverlayContainer.classList.toggle('main__form-overlay--disabled')
})

