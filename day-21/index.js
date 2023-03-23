
/*
>>-------- L 3 V 3 L  1  --------------->
*/

const firstParagraph = document.querySelector('p')

const firstParagraphByID = document.getElementById('paragraph-1'),
      secondParagraphByID = document.getElementById('paragraph-2'),
      thirdParagraphByID = document.getElementById('paragraph-3'),
      fourthParagraphByID = document.getElementById('paragraph-4')


const pElementNodeList = document.querySelectorAll('p')

const textContentsOfEachParagraph = []

pElementNodeList.forEach(paragraph => 
                textContentsOfEachParagraph.push(paragraph.textContent))

                /*
                    0: "First Paragraph"
                    1: "Second Paragraph"
                    2: "Third Paragraph"
                    3: "Fourth Paragraph"
                */

pElementNodeList[3].textContent = 'Once again i\'m the fourth paragraph'

pElementNodeList.forEach(elements => {
    elements.setAttribute('class', 'paragraph-element')
});

pElementNodeList[0].id = 'hi-bro';
pElementNodeList[0].classList.add('another-class-huh')



/*
>>-------- L 3 V 3 L  2  --------------->
*/
pElementNodeList.forEach(element => element.style.padding = '1em')


pElementNodeList[0].style.color = 'lightcoral'

pElementNodeList[1].style.background = 'lightcoral'
pElementNodeList[1].style.color = 'white'

pElementNodeList[2].style.fontSize = '1.5rem'
pElementNodeList[2].style.fontFamily = 'sans'
pElementNodeList[2].style.textTransform = 'uppercase'
pElementNodeList[2].style.border = '2px solid grey'


for(let i=0; i<pElementNodeList.length; i++){
    if(i%2 === 0) pElementNodeList[i].style.color = 'red'

    if(i%2 !== 0) pElementNodeList[i].style.color = 'green'

    pElementNodeList[i].textContent = `Text content has been updated for paragraph ${i+1}`
    pElementNodeList[i].setAttribute('id', 'new-ids-for-paragraphs')
    pElementNodeList[i].classList = 'new-class-for-paragraphs'

    pElementNodeList[i].style.display = 'none'
}



/*
>>-------- L 3 V 3 L  3  --------------->
*/

function getRandomHex(){
    const hexCharecters = '1234567890ABCDEF'

    let generatedHex = '#' // Prefix

    for(let i=1; i<=6; i++){
        const randomDigit = Math.floor(Math.random()*hexCharecters.length)
        
        generatedHex+=hexCharecters[randomDigit]
    }

    return generatedHex;
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
    timeDisplayer.style.background = getRandomHex()
    yearElement.style.color = getRandomHex()
}, 1000)

