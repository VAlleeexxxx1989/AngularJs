
export class Car {
    model: string;
    description: string;

    constructor (model:string , description: string){
        this.model = model;
        this.description = description;


    }
}











// export class Car{
//     engine:string;
//     year:number;
//     manufacturer:string;
  
//     constructor(manuf:string) {
//       this.manufacturer = manuf;
//     }
//   }
//   class Car2{
//     engine:Engine;

//     constructor() {
//       this.engine = new Engine(1899 , EngineType:1)
//     }
//   }

//   enum EngineType {
//     Diesel = 0,
//     Gas = 1,
//     Electric = 2
//   }

//   class Engine {
//     cc:number;
//     type:EngineType;

//     constructor(cc:number, type:EngineType) {
//       this.cc = cc;
//       this.type = type;
//     }
//   }
