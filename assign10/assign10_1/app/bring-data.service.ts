import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITech } from './tech';

@Injectable({
  providedIn: 'root'
})
export class BringDataService {
  public URL = "/assets/Data/tech.json";
  constructor(public hobj:HttpClient) { }

  public GetData():Observable<ITech[]>
  {
    return this.hobj.get<ITech[]>(this.URL);
  }
}
