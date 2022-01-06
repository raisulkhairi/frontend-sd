import { Component, OnInit } from '@angular/core';
import { ParentService } from '../services/parent.service';
import { StudentService } from '../services/student.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalStudent = 0
  totalTeacher = 0
  totalParent = 0

  constructor( private studentService: StudentService, private teacherService: TeacherService, public parentService: ParentService ) { }
  
  ngOnInit(): void {
    this._studentInit()
    this._teacherInit()
    this._parentInit()
  }

  private _studentInit(){
    this.studentService.getTotalStudent().subscribe((result) => {
      console.log(result)
      this.totalStudent = result.totalStudent
    })
  }

  private _teacherInit(){
    this.teacherService.getTotalTeacher().subscribe((result) => {
      console.log(result)
      this.totalTeacher = result.totalTeacher
    })
  }

  private _parentInit(){
    this.parentService.getTotalParent().subscribe((result) => {
      console.log(result)
      this.totalParent = result.totalParent
    })
  }

}
