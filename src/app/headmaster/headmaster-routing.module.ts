import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClassComponent } from './add-class/add-class.component';
import { AddParentComponent } from './add-parent/add-parent.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ClassComponent } from './class/class.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadmasterComponent } from './headmaster.component';
import { ParentDetailComponent } from './parent-detail/parent-detail.component';
import { ParentComponent } from './parent/parent.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path: '',
    component: HeadmasterComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'parent',
        component: ParentComponent
      },
      {
        path: 'teacher',
        component: TeacherComponent,
      },
      {
        path:'student',
        component:StudentComponent,
      },
      {
        path:'add-teacher',
        component:AddTeacherComponent,
      },
      {
        path:'add-student',
        component:AddStudentComponent,
      },
      {
        path:'add-parent',
        component :AddParentComponent,
      },
      {
        path:'class',
        component:ClassComponent,
      },
      {
        path:'add-class',
        component:AddClassComponent,
      },
      {
        path:'subject',
        component:SubjectComponent
      },
      {
        path:'add-subject',
        component:AddSubjectComponent,
      },
      {
        path:'student-detail',
        component:StudentDetailComponent
      },
      {
        path:'parent-detail',
        component:ParentDetailComponent
      },
      {
        path:'teacher-detail',
        component:TeacherDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadmasterRoutingModule { }
