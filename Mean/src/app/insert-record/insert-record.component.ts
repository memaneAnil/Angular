import { Component } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-insert-record',
  templateUrl: './insert-record.component.html',
  styleUrls: ['./insert-record.component.css']
})
export class InsertRecordComponent {
  public msg : any=[];
  public batch="";
  public fees=""
  public str ="insert";
  constructor(public mobj : MarvellousService){}

  ngOnInit(): void {
    //this.mobj.getBatch(this.str).subscribe(data =>this.msg=data);
  }
  insertData(){
    this.str=this.str+"/"+this.batch+"/"+this.fees;
    this.mobj.getBatch(this.str).subscribe(data =>this.msg=data);
    this.batch="";
    this.fees="";
    //this.str="insert";
  }
}
