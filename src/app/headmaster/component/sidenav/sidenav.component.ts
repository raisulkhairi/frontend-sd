import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  opened=false;

  showTeacher = false
  showStudent = false
  showParent = false
  showClass = false
  showSubject = false

  constructor() { }

  ngOnInit(): void {
  }

}
