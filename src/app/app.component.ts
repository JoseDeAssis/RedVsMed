import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.6s ease-out', style({ opacity: 1}))
])
const fadeIn = trigger('fadeIn', [enterTransition])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeIn]
})
export class AppComponent {
  title = 'redvsmed';
  showCorrectWinner: boolean = false

  showWinner() {
    this.showCorrectWinner = true
  }

}
