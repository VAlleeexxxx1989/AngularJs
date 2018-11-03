import { Component } from '@angular/core';
import { Employee } from 'src/classes/Employee';
import { Gender } from 'src/classes/gender';
import { Person } from 'src/classes/Person';
import { updateBinding } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Curs';
//   person : Person;
  
//   constructor() {
//     this.person = new Person("Gengis", "Khan");
//   }


// incrementPro(){
//   this.person.Count();
// }

// zoom : boolean;
// colorRed : boolean;

// divProperties = {
//   'width' : '150px' ,
//   'height' : '150px' ,
//   'background-color' : 'blue'
// }
// update() {
//   this.divProperties = {
//     'width' : this.zoom ? '300px' :'150px' ,
//     'height' : this.zoom ? '300px' : '150px' ,
//     'background-color' : this.colorRed ? 'red' : 'blue'
//   }
// }

car:();

constructor(){
  var model = prompt("what model is you car?")
  var description = prompt("what is the description of your car?")
}

}