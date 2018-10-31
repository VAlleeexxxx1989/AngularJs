import { Component } from '@angular/core';
import { Employee } from 'src/classes/Employee';
import { Gender } from 'src/classes/gender';
import { Person } from 'src/classes/Person';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Curs';
  person : Person;
  
  constructor() {
    this.person = new Person("Gengis", "Khan");
  }


incrementPro(){
  this.person.Count();
}



}