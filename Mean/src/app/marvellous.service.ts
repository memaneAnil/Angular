import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor(public hobj : HttpClient) { }

  public getBatch(str:string){
    console.log("http://localhost:5100/"+str)
    return this.hobj.get("http://localhost:5100/"+str);
  }
}
