import { Component, OnInit } from '@angular/core';
import { AssessmentItemService } from 'src/app/assessment-service/assessment-item.service';

@Component({
  selector: 'app-assessment-overview',
  templateUrl: './assessment-overview.component.html',
  styleUrls: ['./assessment-overview.component.css']
})
export class AssessmentOverviewComponent implements OnInit {

  assesments = [];
  constructor(private AssessmentService:AssessmentItemService) { }

  // get list of assessments
  ngOnInit(): void {
     this.AssessmentService.getAssessmentList().subscribe(val => {
      this.assesments = val;
    });
  }

  //Open the collapsible menu in smaller resolutions
  openMenu(){
    document.getElementById("collapsibleNavbar").style.width = "100%";
  }

}
