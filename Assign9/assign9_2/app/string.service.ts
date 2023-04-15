import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  public count:number = 0;
  constructor() { }

  public countCapitalChar(str:string)
  {
    let i : number = 0;

    for(i=0;i<str.length;i++)
    {
      if(str.charAt(i)>='A'&& str.charAt(i)<='Z')
      {
        this.count++;
      }
      else
      {
        continue;
      }
    }
    return this.count;
  }
}
