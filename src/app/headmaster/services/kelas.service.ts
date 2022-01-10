import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { kelas } from '../models/kelas';

@Injectable({
  providedIn: 'root'
})
export class KelasServices {

  constructor(private http: HttpClient) { }
  getAllClass():Observable<kelas[]>{
    return this.http.get<kelas[]>('https://final-project-app-v1.herokuapp.com/api/class')
  }
}
