export interface IAnimal{
    type: AnimalType;
    makenoise(): void;
}


export class Zoo {
    constructor(){
        this.animals = [];
    }

    private animals : IAnimal[];

    public addAnimal(animal:IAnimal){
        this.animals.push(animal);

        public triggerAlarm(): void{
            for( var i=0: i< ThisType.animal.lenght; i++){
                this.animals[i].makenoise();
            } 
        }
    }
}

export enum AnimalType {
    Mammal = 0,
    Bird = 1,
    Other = 2
}

export class Monkey implements IAnimal{
    makenoise(): void {
        console.log("uuuuuuuuu");
    }
    readonly type: AnimalType = AnimalType.Mammal;
}
export class Pidgeon implements IAnimal{
    makenoise(): void {
        console.log("cip cirip");
    }
    readonly type: AnimalType = AnimalType.Bird;
}
