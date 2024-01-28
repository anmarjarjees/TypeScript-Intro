// Extending a Class:
/*
class "BasicMember" can inherit from "Member":
*/
class AdultMember extends Member {
    // Adding new property specific to "AdultMember" class:
    jobTitle: string | undefined;

    /*
    We also need a custom instructor 
    to initialize the field/property "jobTitle"
    As with Java:
    Since we are adding a custom constructor in the sub-class,
    this constructor must accept all the same parameters
    as the constructor in the super class + the new one(s):
    Because of the reasons that we discussed in the class
    */
    constructor(fullName: string, email: string, age: number, jobTitle: string) {
        /*
        The first 3 properties are from the super class:
        - fullName
        - email
        - age

        So their initialized assignments will be done in the super class,
        we just need to use super() and pass them as arguments to the super class:
        */
        super(fullName, email, age);

        // Only jobTitle needs to be initialized as it's only for this class:
        this.jobTitle = jobTitle;
    }
} // class AdultMember

class TeenageMember extends Member {
    // Adding new property specific to "TeenageMember" class:
    gradeLevel: string | undefined;

    // You can finish this code by adding a constructor for initializing the gradeLevel
} // class TeenageMember

// Main Script:
const member1 = new AdultMember("Alex Chow", "alexchow@ilaccollege.com", 28, "Developer");
const member2 = new TeenageMember("Kate Wilson", "kwilson@learningts.com", 17);