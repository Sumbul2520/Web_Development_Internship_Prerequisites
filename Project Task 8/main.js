// a variable called userName that is set to an empty string.
let userName = '';

// ternary expression to decide what to do based on whether the user enters a name.
userName ? console.log("Hello,"+userName) : console.log('Hello!');

// variable named userQuestion.
let userQuestion = 'Will I have a great day tomorrow?';

// console.log() for the userQuestion, stating what was asked.
console.log("The user asked: "+ userQuestion);

// Generate a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);

//  variable named eightBall and set it equal to an empty string.
let eightBall = '';

// Control flow to assign eightBall to a reply based on the value of randomNumber.
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

// console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.
console.log("Magic Eight Ball says: " + eightBall);
