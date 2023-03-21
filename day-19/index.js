
/*
>>-------- L 3 V 3 L  1  --------------->
*/

function outerFunction(){
    const PI = 3.14;

    function innerFunction(){
        return PI
    }

    return innerFunction;
}

const innerFunction = outerFunction()

innerFunction()  // 3.14


/*
>>-------- L 3 V 3 L  2  --------------->
*/

function getDateAndTime(){
    const dateObject = new Date()

    function getHours(){
        return `Hour: ${dateObject.getHours()}`;
    }

    function getMinutes(){
        return `Minutes: ${dateObject.getMinutes()}`;
    }

    function getDate(){
        return `Date: ${dateObject.getDate()}`;
    }

    return {
        getHours: getHours(),
        getMinutes: getMinutes(),
        getDate: getDate()
    }
    
}

const dateAndTime = getDateAndTime();

dateAndTime.getDate     // Date: 21
dateAndTime.getHours    // Hour: 18
dateAndTime.getMinutes  // Minutes: 53



/*
>>-------- L 3 V 3 L  3  --------------->
*/

function personAccount(fname, lname){
    let firstName = fname,
        lastName = lname,
        incomes = new Map(),
        expenses = new Map(),
        totalExpense = 0,
        totalIncome = 0;


    function addIncome(description, amount){
        if(amount<1) return 'Amount must be greater than zero';
    
        incomes.set(description, amount)
        totalIncome+=amount;
        return `${description} added to incomes` 
    }

    function addExpense(description, amount){
        if(amount<1) return 'Amount must be greater than zero';
        if(amount>accountBalance()) return 'Not enough balance in your Account';

        expenses.set(description, amount)
        totalExpense+=amount;
        return `${description} added to expenses`;
    }

    function accountBalance(){
        return totalIncome - totalExpense;
    }

    function accountInfo(){
        let info = `${firstName} ${lastName}'s Account\n`;

        info+='Income :\n';
        for (const [description, amount] of incomes.entries()) {
            info+=` ${description} - ${amount} \n`
        }
        info+=`Total Income: ${totalIncome}\n\n`;

        info+='Expenses: \n'
        for (const [description, amount] of expenses.entries()) {
            info+=` ${description} - ${amount} \n`
        }
        info+=`Total Expenses: ${totalExpense}\n\n`;
        info+=`Account Balance: ${accountBalance()}`;

        return info;
    }



    return {
        addIncome,
        addExpense,
        accountBalance,
        accountInfo
    }
}

const abdulKhalidAcc = personAccount('Abdul', 'Khalid');

abdulKhalidAcc.addIncome('Salary', 50000);
abdulKhalidAcc.addIncome('Passive', 5000);

abdulKhalidAcc.addExpense('Rent', 5000);
abdulKhalidAcc.addExpense('Broadband', 1000);

abdulKhalidAcc.accountInfo()  /*
                                Abdul Khalid's Account
                                Income :
                                 Salary - 50000 
                                 Passive - 5000 
                                Total Income: 55000

                                Expenses: 
                                 Rent - 5000 
                                 Broadband - 1000 
                                Total Expenses: 6000

                                Account Balance: 49000
                            */
