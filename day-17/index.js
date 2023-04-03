
/*
>>-------- L 3 V 3 L  1  --------------->
*/

const userDetails = {
    firstName: 'Abdul',
    secondName: 'Khalid',
    age: 18,
    country: 'ummah',
    isAcceptedIslam: true
}

localStorage.setItem('user', JSON.stringify(userDetails, undefined, 4))

localStorage.getItem('user') /* {
                                    "firstName": "Abdul",
                                    "secondName": "Khalid",
                                    "age": 18,
                                    "country": "ummah",
                                    isAcceptedIslam: true
                                }  */




/*
>>-------- L 3 V 3 L  2  --------------->
*/
                        
const student = {
    firstName: 'Abdul',
    lastName: 'Khalid',
    age: 18,
    skills: ['HTML5, CSS3, JavaScript, Git, CLI'],
    country: 'ummah',
    enrolled: ['Frontend']
}                             

localStorage.setItem('student', JSON.stringify(student, undefined, 4));

localStorage.getItem('student') /* {
                                        "firstName": "Abdul",
                                        "lastName": "Khalid",
                                        "age": 18,
                                        "skills": [
                                            "HTML5, CSS3, JavaScript, Git, CLI"
                                        ],
                                        "country": "ummah",
                                        "enrolled": [
                                            "Frontend"
                                        ]
                                    } */



                                    
/*
>>-------- L 3 V 3 L  2  --------------->
*/                               

const personAccount = {
    firstName: 'Abdul',
    lastName: 'Khalid',
    incomes: {
        'Frontend': 50000,
        'Passive': 1000,
    },
    expenses: {
        'Rent': 5000,
        'Food': 1000,
    },
    totalExpense: function(){
        const keys = Object.keys(this.expenses);
        return keys.map(key => parseInt(this.expenses[key])).reduce((a,b)=> a+b, 0)
    },
    totalIncome: function(){
        const keys = Object.keys(this.incomes);
        return keys.map(key => parseInt(this.incomes[key])).reduce((a,b)=> a+b, 0)
    },
    accountInfo: function(){
        return `Acc Name: ${this.firstName} ${this.lastName} \nTotal Income: ${this.totalIncome()} \nTotal Expenses: ${this.totalExpense()}`
    },
    addIncome: function(description, income){
        if(description === undefined || income === undefined) return 'Provide valid values'

        this.incomes[description] = income;
        return 'Income has been added';
    },
    addExpense: function(description, expense){
        if(description === undefined || expense === undefined) return 'Provide valid values'

        this.expenses[description] = expense;
        return 'Expense has been added';
    },
    accountBalance: function(){
        const totalBalance = this.totalIncome() - this.totalExpense();
        return `Account Balance: ${totalBalance}`
    },
}

personAccount.totalIncome() // 51000
personAccount.totalExpense() // 6000
personAccount.accountBalance() // Account Balance: 45000

personAccount.addIncome('Bonus', 5000) // Income has been added
personAccount.addExpense('Shopping', 2000)  // Expense has been added
personAccount.accountBalance() // Account Balance: 48000

personAccount.addExpense() // If we call these methods without any arguments then
                           // it returns "Provide valid values"
