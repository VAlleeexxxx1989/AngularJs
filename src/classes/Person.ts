export class Person {
    firstName: string;
    lastName: string;
    finishedProjects: number;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.finishedProjects = 0;
    }

    

    Count(){
       this.finishedProjects+=2;
    }
    

}