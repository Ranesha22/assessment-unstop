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
    for(let i = 1; i <= this.acnt; i++){
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
    let translate = (i+1) *-10;
    return `translateX(${translate}px)`
  }

 //Add necessary right margin to button
  rightMargin(i,multiplier?) {
    if(multiplier)
    return `${(i)* multiplier}px`;
    return `${ ((i+1) *20) - (i*5) }px`
  }

  // Return z-index for overlapping accounts
  zIndex(i){
    return this.items.length - i;
  }
}
