import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }
  students: Student[]=[]

  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe(result => {
      this.students= result
      console.log(this.students)
    })
  }

}
