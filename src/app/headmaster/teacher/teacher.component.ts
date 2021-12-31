import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
