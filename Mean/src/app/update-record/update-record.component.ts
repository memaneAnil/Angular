import { Component } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  styleUrls: ['./update-record.component.css']
})
export class UpdateRecordComponent {
  public msg : any=[];
  public batch="";
  public fees="";
  public str ="update";
  constructor(public mobj : MarvellousService){}

  ngOnInit(): void {
    //this.mobj.getBatch(this.str).subscribe(data =>this.msg=data);
  }
  updateData(){
    this.str=this.str+"/"+this.batch+"/"+this.fees;
    this.mobj.getBatch(this.str).subscribe(data =>this.msg=data);
    this.batch="";
    this.fees="";
    this.str="update";
  }
}
