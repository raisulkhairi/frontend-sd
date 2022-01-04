import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
