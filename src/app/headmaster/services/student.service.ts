import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  
  getTotalStudent():Observable<any>{
    return this.http.get<any>('https://final-project-app-v1.herokuapp.com/api/student/count')
  }
  getAllStudent():Observable<any>{
    return this.http.get<any>('https://final-project-app-v1.herokuapp.com/api/student')
  }
}
