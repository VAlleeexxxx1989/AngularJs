import { Gender } from "./gender";


export class Employee{
    private readonly firstName: string;
    private readonly  lastName: string;
    position: string;
    genderType: Gender;
    
    constructor(firstName:string, lastName:string, gender:Gender, position:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genderType = gender;
        this.position = position;
        
      }
      public printPosition():void {

        switch(this.position)
        {
            case "developer" :
            console.log(" i am a developer");
                break
            case "tester" :
            console.log(" i am a tester");
                break
            case "designer" :
            console.log(" i am a designer");
                break
            default : 
            console.log("I dont know :)");
                break
        }
    }
  }

 