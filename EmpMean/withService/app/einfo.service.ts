import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDept } from './department';

@Injectable({
  providedIn: 'root'
})
export class EinfoService {
URL ="assets/deptdata/department.json";
  constructor(private http : HttpClient) { }

 getEmpInfo(){
  return this.http.get(this.URL);
 } 
}
