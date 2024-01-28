// Classes and Interfaces:
/*
In OOP classes can implement interfaces
*/
interface ClubInterface {
    fullName: string;
    email: string;
    age: number;
    join(): void;
}

/*
 All the interface properties/methods must be implemented
 Error:
 Class 'Member' incorrectly implements interface 'ClubInterface'.
 Type 'Member' is missing the following properties 
 from type 'ClubInterface': fullName, age, email, join

 We can select the "Quick Fix" option as we do in Java,
 to have VS code implements the interface fields:
*/
class Member implements ClubInterface {
    fullName: string;
    email: string;
    age: number;

    // we need to a constructor to initialize the class fields:
    constructor(fullName: string, email: string, age: number) {
        this.fullName = fullName;
        this.email = email;
        this.age = age;
    }

    join(): void {
        // below is the default code line "throw" with Quick Fix Feature:
        // throw new Error("Method not implemented.");
        console.log("Thank you for joining our club!");
    }
} // class