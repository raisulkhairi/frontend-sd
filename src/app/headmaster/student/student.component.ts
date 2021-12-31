import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
