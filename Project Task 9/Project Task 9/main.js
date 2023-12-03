// Generate a random race number
let raceNumber = Math.floor(Math.random() * 1000);

// Create a variable indicating whether a runner registered early
let registeredEarly = true; 

// Create a variable for the runner's age
let runnerAge = 21; 

// Check if the runner is exactly 18 years old
if (runnerAge === 18) {
  console.log("You are exactly 18 years old. Please see the registration desk.");
} else {
  // Check if the runner is an adult and registered early
  if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
    console.log(`You are an adult and registered early. Your race number is ${raceNumber}. You will race at 9:30 am.`);
  } else if (runnerAge > 18 && !registeredEarly) {
    console.log(`You are an adult and did not register early. Your race number is ${raceNumber}. You will race at 11:00 am.`);
  } else if (runnerAge < 18) {
    console.log(`You are a youth. Your race number is ${raceNumber}. You will race at 12:30 pm.`);
  }
}
