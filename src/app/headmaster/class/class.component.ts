import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { kelas } from '../models/kelas';
import { KelasServices } from '../services/kelas.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  constructor(private kelasService:KelasServices) { }
  kelas:kelas[]=[]
  ngOnInit(): void {
    this.kelasService.getAllClass().subscribe(result=>{
      this.kelas=result
      console.log(this.kelas)
    })
  }

}
