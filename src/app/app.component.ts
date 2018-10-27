import { Component } from '@angular/core';
import { Car } from 'src/classes/car';
import { Employee } from 'src/classes/Employee';
import { Zoo, Monkey, Pidgeon } from 'src/classes/zoo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curs';

  constructor() {
    var zoo = new Zoo();
    var monkey1 = new Monkey();
    var monkey2 = new Monkey();
    var bird1 = new Pidgeon();

    zoo.addAnimal(monkey1);
    zoo.addAnimal(monkey2);
    zoo.addAnimal(bird1);

    zoo.triggerAlarm();
  }
}



