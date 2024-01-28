"use strict";
class AdultMember extends Member {
    constructor(fullName, email, age, jobTitle) {
        super(fullName, email, age);
        this.jobTitle = jobTitle;
    }
}
class TeenageMember extends Member {
}
const member1 = new AdultMember("Alex Chow", "alexchow@ilaccollege.com", 28, "Developer");
const member2 = new TeenageMember("Kate Wilson", "kwilson@learningts.com", 17);
