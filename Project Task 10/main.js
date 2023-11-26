const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error: Invalid choice. Please choose rock, paper, scissors, or use the secret cheat code "bomb".');
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
  
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'You win! ';
    } else if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (userChoice === 'rock') {
      return computerChoice === 'paper' ? 'Computer wins!' : 'You win!';
    } else if (userChoice === 'paper') {
      return computerChoice === 'scissors' ? 'Computer wins!' : 'You win!';
    } else if (userChoice === 'scissors') {
      return computerChoice === 'rock' ? 'Computer wins!' : 'You win!';
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('rock'); // You can input 'rock', 'paper', 'scissors', or 'bomb'
    const computerChoice = getComputerChoice();
  
    console.log("User Choice:" + userChoice);
    console.log("Computer Choice:" + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // Start the game
  playGame();
  