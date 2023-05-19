import { Component } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-delete-record',
  templateUrl: './delete-record.component.html',
  styleUrls: ['./delete-record.component.css']
})
export class DeleteRecordComponent {
  public msg : any=[];
  public str ="delete";
  public batch="";
  constructor(public mobj : MarvellousService){}

  ngOnInit(): void {
    //this.mobj.getBatch(this.str).subscribe(data =>this.msg=data);
  }
  deleteData(){
    this.str=this.str+"/"+this.batch;
    this.mobj.getBatch(this.str).subscribe(data =>this.msg=data);
    this.batch="";
    
    this.str="delete";
  }
}
