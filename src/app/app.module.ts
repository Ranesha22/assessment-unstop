import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentHomeComponent } from './assessment-home/assessment-home.component';
import { AssessmentOverviewComponent } from './assessment-home/assessment-overview/assessment-overview.component';
import { MenuComponent } from './assessment-home/menu/menu.component';
import { AssesmentCardComponent } from './utils/assesment-card/assesment-card.component';
import { NewAssessmentCardComponent } from './utils/new-assessment-card/new-assessment-card.component';
import { NewAssessmentModalComponent } from './utils/new-assessment-modal/new-assessment-modal.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentHomeComponent,
    AssessmentOverviewComponent,
    MenuComponent,
    AssesmentCardComponent,
    NewAssessmentCardComponent,
    NewAssessmentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
