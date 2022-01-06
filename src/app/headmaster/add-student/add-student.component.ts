import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-student',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
