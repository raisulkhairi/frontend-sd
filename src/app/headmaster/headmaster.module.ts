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
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddParentComponent } from './add-parent/add-parent.component';
import { ClassComponent } from './class/class.component';
import { AddClassComponent } from './add-class/add-class.component';

@NgModule({
  declarations: [
    TeacherComponent,
    StudentComponent,
    ParentComponent,
    DashboardComponent,
    TeacherComponent,
    AddTeacherComponent,
    AddStudentComponent,
    AddParentComponent,
    ClassComponent,
    AddClassComponent,
  ],
  imports: [
    CommonModule,
    HeadmasterRoutingModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
    
  ]
})
export class HeadmasterModule { }
