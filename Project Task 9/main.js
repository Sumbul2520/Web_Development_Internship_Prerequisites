let raceNumber = Math.floor(Math.random() * 1000);
let raceRegistration = true;
let runnerAge = 18
if (runnerAge > 18 && raceRegistration === true) {
  raceNumber = raceNumber + 1000;
}
if (runnerAge > 18 && raceNumber >= 1000) {
  console.log("An adult with " + raceNumber + " will run at 9:30 am");
} else if (runnerAge > 18 && raceNumber < 1000) {
  console.log("An adult with " + raceNumber + " will run at 11:00 am");
} else if (runnerAge < 18) {
  console.log("A youth with " + raceNumber + " will run at 12:30 pm")
} else {
  console.log("Runner, please go to the registration desk.")
}
