
/*
>>-------- L 3 V 3 L  1  --------------->
*/

const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error)) /* LOGS 250 COUNTRIES  */



/*
>>-------- L 3 V 3 L  2  --------------->
*/

const catsAPI = 'https://api.thecatapi.com/v1/breeds';
let catNames;
fetch(catsAPI)
.then(response => response.json())
.then(data => {
    catNames = data.map(object => object.name)
    console.log(catNames)
})
.catch(error => console.log(error))   /* LOGS ABOUT 67 CAT NAMES
                                        [ "Abyssinian", "Aegean", "American Bobtail", "American Curl", "American Shorthair", 
                                        "American Wirehair", "Arabian Mau", "Australian Mist", "Balinese", "Bambino", … ]
                                      */




/*
>>-------- L 3 V 3 L  3  --------------->
*/

fetch(catsAPI)
.then(response => response.json())
.then(data => {
    const dat = []
    let result;
    data.map(object => {
        object.weight.metric.split(' ').forEach(el=> {
            const num = Number(el)
            if(!num) return;
            if(dat.includes(el)) return
            dat.push(num)
        });

    const sum = dat.reduce((acc, cur)=> acc+cur, 0)
    result = (sum/dat.length).toFixed(2)
    });
    console.log(`Average weight of cat in metric unit is ${result}`)
})
.catch(error => console.log(error)) /*
                                        Average weight of cat in metric unit is 4.71
                                    */



fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const countriesWithArea = data.sort((a,b)=>{
            if(a.area>b.area) return -1;
            if(a.area<b.area) return 1;
            return 0;
        })
        .map(el => {
            return {
                [el.name]: el.area
            }
        }).slice(0, 10);
        
        console.log(countriesWithArea)
    })
    .catch(error => console.log(error))     /*
                                                { Antarctica: 14000000 }
                                                { Canada: 9984670 }
                                                { China: 9640011 }
                                                { "United States of America": 9629091 }
                                                { Brazil: 8515767 }
                                                ​{ Australia: 7692024 }
                                                { India: 3287590 }
                                                { Argentina: 2780400 }
                                                { Kazakhstan: 2724900 }
                                                { Algeria: 2381741 }
                                            */

                                    
//

fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    const languages = new Set() // Using set helps us to automatically filter distinct values
    data.map(el => el.languages.forEach(lang => languages.add(lang.name)))

    console.log(`Total number of official languages in the world is ${languages.size}`)
})
.catch(error => console.log(error))  /* 
                                        Total number of official languages in the world is 123 (I'm not kidding 😅 really it's 123)
                                    */