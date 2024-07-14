// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
    }
    return gifts;
}
wrapGifts(gifts)

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "Surprise" 
function writeCards(namesArray, eventString){
    //1. create a new, empty array to hold the messages;
    const finalArray = [];
    //iterate through the input array and, inside the loop, build out the 'thank you' message 
    //for each name using string interpolation, then add that message to the new array you created;
    for(let i = 0; i < namesArray.length; i++){
        //create message - name comes from namesArray[i]
        let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventString} gift!`;
        //add message to final array
        finalArray.push(message);
    }
    //return new array
    return finalArray;
}
const messages = writeCards(names, event)

console.log(messages)

function countDown(index) {
    // for (let i = index; i >= 0; i--) {
    //     console.log(i)
    // }
    let countDown = index;
    while (countDown >= 0) {
        console.log(countDown)
        countDown--
    }
}
countDown(10)