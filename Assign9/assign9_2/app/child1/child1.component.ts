import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  public no:number = 23;
  public ret: boolean = false;
  public str = "";
  constructor(public obj : NumberService){}

  ngOnInit() {
    this.ret =this.obj.chkPrime(this.no);
    console.log(this.ret);
    if(this.ret)
    {
      this.str ="Prime number";
    }
    else
    {
      this.str = "Not a Prime number";
    }

  }

}
