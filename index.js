// Code your solutions in this file
function writeCards(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i--);
    }
}

