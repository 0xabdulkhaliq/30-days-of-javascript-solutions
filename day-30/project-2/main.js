// Script is under development, regexp's are ready validation in on process

const everyInputElement = document.querySelectorAll('input')

everyInputElement.forEach(inputElement => {
    inputElement.addEventListener('keyup', (e)=>{
        const value = e.target.value

        console.log(/^[a-zA-Z0-9,.'"\s-]{1,30}$/.test(value))
    })
})

const regExps = [/^[0-9a-zA-Z]{3,15}$/, 
                /^[0-9a-zA-Z]{3,15}$/,                                              // Name
                /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/,           // Email
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/,  // Password
                /^\+?\d{1,3}[-\s]?\d{1,3}[-\s]?\d{4}$/,                             // Telephone
                /^[a-zA-Z0-9,.'"\s-]{1,30}$/                                        // Bio    
            ]
