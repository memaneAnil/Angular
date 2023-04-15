import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {
  
public Addition(no1:number,no2:number) {
  return no1+no2;
}
public Substraction(no1:number,no2:number) {
  return no1-no2;
}
}
