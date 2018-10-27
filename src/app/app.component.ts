import { Component } from '@angular/core';
import { Employee } from 'src/classes/Employee';
import { Gender } from 'src/classes/gender';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curs';

  constructor() {
   var newposition = new Employee("Vlad", "Mihai", Gender.Male, "developer");
    newposition.printPosition();
  }
}



