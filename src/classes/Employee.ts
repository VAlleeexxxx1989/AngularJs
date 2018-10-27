

export class Employee{
    private readonly firstName: string;
    private readonly  lastName: string;
    genderType: Gender;
    
    constructor(firstName:string, lastName:string, gender:Gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genderType = gender;
        
      }
    
  }

 