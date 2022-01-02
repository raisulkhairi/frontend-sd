import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadmasterRoutingModule } from './headmaster-routing.module';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    TeacherComponent,
    StudentComponent,
    ParentComponent,
    DashboardComponent,
    TeacherComponent,
  ],
  imports: [
    CommonModule,
    HeadmasterRoutingModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule
  ]
})
export class HeadmasterModule { }
