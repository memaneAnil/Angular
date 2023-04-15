import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public add :number =0;
  public sub :number =0;
  public no1 =10;
  public no2 =11;

  constructor(public obj : ArithmeticService) { }

  ngOnInit(){
    this.add = this.obj.Addition(this.no1,this.no2);
    this.sub = this.obj.Substraction(this.no1,this.no2);
  }
}
