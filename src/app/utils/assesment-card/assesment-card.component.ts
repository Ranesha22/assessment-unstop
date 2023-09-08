import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assesment-card',
  templateUrl: './assesment-card.component.html',
  styleUrls: ['./assesment-card.component.css']
})
export class AssesmentCardComponent implements OnInit {

  @Input() title : String = '';
  @Input() type : String ='';
  @Input() date : String = '';
  @Input() duration :String = '';
  @Input() question : String = '';
  @Input() acnt : number = 0;
  items =[]
  constructor() { }

  ngOnInit(): void {
  }

  // Create an array for number of accounts 
  createRange(){
    this.items = [];
    let logged_acnt = this.acnt ;
    if (this.acnt > 3 ) logged_acnt = 3;
    for(let i = 1; i <= logged_acnt; i++){
       this.items.push(i);
    }
    return this.items;
  }

  //Random color generator for background of accounts in an assessment
  randomColorGenerator(){
  const randomColor = (Math.floor(Math.random()*16777215).toString(16)).padStart(6,'0');
  return `#${randomColor.toUpperCase()}`
  }

  //Formula to overlap accounts 
  tranformFormula(i){
    let translate = i;
    return `translateX(${translate}px)`
  }

 //Add necessary right margin to button
  rightMargin(i) {
    return `${ i * 15 }px`
  }

  // Return z-index for overlapping accounts
  zIndex(i){
    return this.items.length - i;
  }
}
