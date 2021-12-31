import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
