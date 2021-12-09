import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() questionNumber: number;
  @Input() question: question;

  constructor() { }

  ngOnInit(): void {

  }

  postAnswer(answerNumber: number){
    if(answerNumber == 1){
      alert("Richtige Antwort, 100 Punkte!")
    }else{
      alert("Zonk!")
    }
  }

}
