import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDept } from './department';

@Injectable({
  providedIn: 'root'
})
export class EinfoService {
URL ="http://127.0.0.1:5100";
  constructor(private http : HttpClient) { }

 getEmpInfo(id:any):Observable<IDept[]>{
  console.log(this.URL+"/:"+id)
  return this.http.get<IDept[]>(this.URL+"/"+id);
 } 
}
