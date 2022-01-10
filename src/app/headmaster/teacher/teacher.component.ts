import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { Teacher } from '../models/teacher';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  constructor(private teacherService:TeacherService) { }
  teachers: Teacher[]=[]
  // subject:any[]=[]

  ngOnInit(): void {
    this.teacherService.getAllTeacher().subscribe(result => {
      this.teachers= result
      console.log(result)
    })
  }

}
