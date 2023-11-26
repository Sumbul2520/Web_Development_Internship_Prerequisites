class School{
    constructor(name, level, numberOfstudrnts){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfstudrnts;
    }
    //Getters
    get name() {
        return this._name;
    }

    get level(){
        return this._level;
    }

    get numberOfstudrnts() {
        return this._numberOfStudents;
    }

    //Setter for numberOfStudents
    /**
     * @param {any} newNumberOfStudents
     */
    set numberOfStudrnts(newNumberOfStudents){
        if (typeof newNumberOfStudents === 'number'){
            this._numberOfStudents = newNumberOfStudents;
        }else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
   quickFacts(){
    console.log(+ this._name + "educates" + this._numberOfStudents  + "students at the " +this._level +"school level.");
   }

   //Static method
   static pickSubstituteTeacher(substituteTeachers){
    const randIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randIndex];
   }

}
class primarySchool extends School{
    constructor(name, numberOfStudrnts,pickupPolicy){
        super(name,'primary',numberOfStudrnts);
        this._pickupPolicy = pickupPolicy; 
    }

    get pickupPolicy(){
        return this.pickupPolicy;
    }
}

class Highschool extends School{
    constructor(name,numberOfStudrnts, sportsTeams){
        super(name,'high', numberOfStudrnts);
        this._sportsTeam = sportsTeams;
    }

    get sportsTeams(){
        console.log(`Sports Teams: ${this._sportsTeams}` );
        return this._sportsTeam;
    }
}
    //Create PrimarySchool instance
   const lorraineHansbury = new primarySchool('Lorraine Hansbury', 514, 'Studentsmust be picked up by a parent,guaedian, or a family member over the age of 13');

   //call .quickfacts()
   lorraineHansbury.quickFacts();

   //call .pickSubstituteTeacher() on School
   const substituteTeachers = ['Jamal Crawford','Low Williams','J. R. Smith ','James Harden','Jason Terry','Manu Ginobali'];
   const substituteTeacher = School.pickSubstituteTeacher(substituteTeachers);
   console.log('Substitute Teacher for Lorraine Hansburry:'+ substituteTeacher);

   //Create HighSchool instance
   const alSmith = new Highschool('Al E. Smith', 415, ['Baseball','Basketball','Volleyball','Trank and Field']);
   console.log('Sports Team at E. Smith' + alSmith.sportsTeams);
   