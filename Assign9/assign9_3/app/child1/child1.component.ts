import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  public no:number = 11;
  public ret: boolean = false;
  public str = "";
  public str1 = "MaRveLLouS";
  public count:number = 0;

  constructor(public obj : NumberService,public obj1 :StringService){}

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
    this.count=this.obj1.countCapitalChar(this.str1);
  }

}
