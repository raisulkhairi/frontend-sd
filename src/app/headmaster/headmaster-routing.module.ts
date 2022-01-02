import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddParentComponent } from './add-parent/add-parent.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadmasterComponent } from './headmaster.component';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';
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
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadmasterRoutingModule { }
