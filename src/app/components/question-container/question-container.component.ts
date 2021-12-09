import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent implements OnInit {
  questions: question[];
  constructor() { }

  ngOnInit(): void {
    this.questions = [{questionText : "Was ist deine Lieblingszahl?", answerOne : "1", answerTwo : "2", answerThree : "3", answerFour : "4"},
    {questionText : "Was ist deine Lieblingfarbe?", answerOne : "Blau", answerTwo : "Gruen", answerThree : "Rot", answerFour : "Gelb"},
    {questionText : "Was ist dein Lieblingstier?", answerOne : "Otter", answerTwo : "Otter", answerThree : "Otter", answerFour : "Otter"}];
  }

}
