import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService  {

  constructor() { }

  chkPrime(no1:number)
  {
    let i : number=0;
    for(i=2 ;i<Math.floor(no1/2+1);i++)
    {
      if(no1%i == 0)
      {
        break;
      }
    }
    console.log(i+""+Math.floor(no1/2+1));
    if(i == Math.floor(no1/2+1))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
