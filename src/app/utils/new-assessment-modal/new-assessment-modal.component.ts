import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssessmentItemService } from 'src/app/assessment-service/assessment-item.service';

@Component({
  selector: 'app-new-assessment-modal',
  templateUrl: './new-assessment-modal.component.html',
  styleUrls: ['./new-assessment-modal.component.css']
})
export class NewAssessmentModalComponent implements OnInit {

  newAssessment: FormGroup;
  skillSet = [];
  purposeDropdown = ["Purpose 1", "Purpose 2", "Purpose 3"];
  descDropdown = ["Description 1", "Description 2", "Description 3", "Description 4"]
  durationValid = true;

  @ViewChild('closebutton') closebutton;

  constructor(private AssessmentService: AssessmentItemService) { }

  ngOnInit(): void {
    // Create forn for new assessment
    this.newAssessment = new FormGroup({
      name: new FormControl('', Validators.required),
      purpose: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      skill: new FormControl(''),
      duration: new FormControl('', [Validators.required, Validators.pattern('^[0-9:]*$')])
    });
    this.skillSet = []
  }

  // Add and remove necessary class to animate open and close of modal
  removeClass() {
    let modalContent = document.getElementById('modalContent');
    modalContent.classList.remove('animate-bottom');
    modalContent.classList.add('animate-top');
    setTimeout(() => {
      modalContent.classList.remove('animate-top');
      modalContent.classList.add('animate-bottom');
    }, 1000)
  }

  // closes the modal
  closeModal() {
    this.skillSet = [];
    this.removeClass();
  }

  //Add skills to a new assessment
  addToSkill() {
    this.skillSet.push(this.newAssessment.get('skill').value);
    this.newAssessment.get('skill').setValue('')
    // console.log(this.skillSet)
  }

  //Remove skill from assessment
  removeSkill(skill) {
    let ind = this.skillSet.indexOf(skill);
    this.skillSet.splice(ind, 1);
    // console.log(this.skillSet)
  }

  //Add assessment to existing list of assessment
  onSubmit() {
    this.durationValid = true;
    // console.log(this.newAssessment.value)
    let time = this.newAssessment.get('duration').value;
    let hr = time.split(':')[0];
    let min = time.split(':')[1];
    let sec = time.split(':')[2];

    if (min > 59 || sec > 59) {
      this.durationValid = false;
      return;
    }

    let duration_test = time !== "" ? hr * 60 + min : '00';

    let dateobj = new Date();
    let day = dateobj.getDate();
    let month = dateobj.toLocaleString('default', { month: 'long' });
    let year = dateobj.getFullYear();

    let new_item = {
      assesment_name: this.newAssessment.get('name').value,
      assesment_type: this.newAssessment.get('purpose').value,
      assesment_date: day + " " + month + " " + year,
      assesment_duration: duration_test + " mins",
      assesment_question: Math.floor(Math.random() * 90 + 10),
      log_acnt: 2
    }

    this.AssessmentService.addItemtoAssessment(new_item);
    this.newAssessment.reset();
    this.closebutton.nativeElement.click();
  }


}
