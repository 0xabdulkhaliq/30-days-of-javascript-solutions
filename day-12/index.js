const sentence = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

const totalEarnings = sentence              // Result: 19500
                      .match(/\d+/gi)
                      .map(a => {return parseInt(a)})
                      .reduce((acc, cur)=> acc+cur)

let points = [-12, -4, -3, -1, 0, 4, 8]
        .sort((a,b)=> {
                    if(a>b) return 1;
                    if(a<b) return -1;
                    return 0
                });
                
let distance = points.slice(0, 1)-points.slice(-1,1) // -12


function isValidVariable(variableName){
    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(variableName)
}

isValidVariable('first_name')  // True
isValidVariable('first-name')  // False
isValidVariable('1first_name') // False
isValidVariable('firstname')   // True


function findMostFrequentWords(sentenceToBeEvaluated, maxCountToBeDisplayed){
    const sentence = sentenceToBeEvaluated

    const wordsFromSentence = new Set(sentence.split(' ')); // Using Set() to avoid Duplicates

    const result = [];

    wordsFromSentence.forEach(word => {
        let regi = new RegExp(word, 'g');

        result.push({
            word: word,
            count: sentence.match(regi).length
        })
    })
    
    result.sort((a, b)=> {
        if(a.count>b.count) return -1;
        if(a.count<b.count) return 1;
        return 0;
    })
    
    return result.slice(0, maxCountToBeDisplayed)
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

findMostFrequentWords(paragraph, 5)    /*      {word:'love', count:6},
                                    {word:'you', count:5},
                                    {word:'can', count:3},
                                    {word:'what', count:2},
                                    {word:'teaching', count:2}, */

const stringToBeCleaned = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`


function cleanTextAndCountMostFrequentWords(stringToBeCleaned){
    const sentence = stringToBeCleaned;

    const cleanedString = sentence.replace(/[^\w\s]/gi, '')

    return findMostFrequentWords(cleanedString, 3)
}

cleanTextAndCountMostFrequentWords(stringToBeCleaned)  /* { word: "a", count: 16 }
                                                          { word: "I", count: 3 }
                                                          { word: "teacher", count: 2 }
                                                        */
