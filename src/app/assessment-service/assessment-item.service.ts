import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentItemService {

  //list of assessments
  assesments = [{
    assesment_name : 'Math Assessment',
    assesment_type : 'Job',
    assesment_date : '20 April 2023',
    assesment_duration : '00',
    assesment_question : '00',
    log_acnt : 1
  }, {
    assesment_name : 'Math Assessment',
    assesment_type : 'Job',
    assesment_date : '21 April 2023',
    assesment_duration : '00',
    assesment_question : '00',
    log_acnt : 3
  },{
    assesment_name : 'Math Assessment',
    assesment_type : 'Job',
    assesment_date : '20 April 2023',
    assesment_duration : '00',
    assesment_question : '00',
    log_acnt : 524
  },{
    assesment_name : 'Math Assessment',
    assesment_type : 'Job',
    assesment_date : '20 April 2023',
    assesment_duration : '00',
    assesment_question : '00',
    log_acnt : 323
  },{
    assesment_name : 'Math Assessment',
    assesment_type : 'Job',
    assesment_date : '20 April 2023',
    assesment_duration : '00',
    assesment_question : '00',
    log_acnt : 33
  }]

  constructor() { }

  getAssessmentList():Observable<any>{
    return of(this.assesments);
  }

  addItemtoAssessment(item){
    this.assesments.push(item);
  }
}
