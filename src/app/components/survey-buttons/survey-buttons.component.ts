import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

const leaveTransition = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.6s ease-out', style({ opacity: 0}))
])
const fadeOut = trigger("fadeOut",[leaveTransition])

@Component({
  selector: 'app-survey-buttons',
  templateUrl: './survey-buttons.component.html',
  styleUrls: ['./survey-buttons.component.css'],
  animations: [fadeOut]
})
export class SurveyButtonsComponent implements OnInit {

  @Output() winnerPressed = new EventEmitter<boolean>()
  @ViewChild('med') element!: ElementRef;
  correctWinnerSelected: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  correctWinner() {
    this.winnerPressed.emit(true)
    this.correctWinnerSelected = !this.correctWinnerSelected
  }

  wrongWinner() {
    console.log(this.element)
    let maxWidth = this.element.nativeElement.getBoundingClientRect().x - this.element.nativeElement.offsetWidth
    let maxHeight = this.element.nativeElement.getBoundingClientRect().y - this.element.nativeElement.offsetHeight

    this.element.nativeElement.style.left = this.getRandomNumberX() + "px"
    this.element.nativeElement.style.top = this.getRandomNumberY() + "px"
  }

  getRandomNumberX() {
    const maxWidth = (700 * window.outerWidth) / 1920
    const minWidth = (1500 * window.outerWidth) / 1920

    return Math.floor(Math.random() * minWidth * (-1)) + maxWidth
  }

  getRandomNumberY() {
    const maxWidth = (100 * window.outerHeight) / 1032
    const minWidth = (800 * window.outerHeight) / 1032

    return Math.floor(Math.random() * minWidth * (-1)) + maxWidth
  }

}
