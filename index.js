// Code your solutions in this file
let names=[]
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message ='Thank you, ${name[i]}, for the wonderful ${event} gift!';
      messages.push(message);
    }
    return message;
}
function countDown(number) {
    while (number >=0) {
        console.log(number);
        number = number - 1;

    }
}