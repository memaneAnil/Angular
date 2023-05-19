import { Component, OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-display-record',
  templateUrl: './display-record.component.html',
  styleUrls: ['./display-record.component.css']
})
export class DisplayRecordComponent implements OnInit{
  public msg : any=[];
  IsTrue : boolean =false;
  public lItem =["All","Angular","LSP","LB","PPA"]
  public str ="read";
  constructor(public mobj : MarvellousService){}

  ngOnInit(): void {
    this.IsTrue=false;
    //this.mobj.getBatch(this.str).subscribe(data =>this.msg=data);
  }
  onSelected(value:string): void {
    if(!(value=="All"))
    this.str=this.str+"/"+value

    this.IsTrue=true;
		this.mobj.getBatch(this.str).subscribe(data =>this.msg=data);
    this.str="read";
	}
 /* getData(){
    this.mobj.getBatch(this.str).subscribe(data =>this.msg=data);
  }*/
}
