import { Component } from '@angular/core';
import { DateService } from 'src/app/services/date-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTesting';
  today = 'Hola';

  constructor(dateService: DateService)
  {
      this.today = dateService.getDate();
  }
  
  changeTitle() {
    this.title = "LearnTesting";
  }
}

