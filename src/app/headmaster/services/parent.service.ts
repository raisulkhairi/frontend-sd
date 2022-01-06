import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }

  getTotalParent():Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/parent/count')
  }
  getAllParent():Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/parent')
  }
  
}
