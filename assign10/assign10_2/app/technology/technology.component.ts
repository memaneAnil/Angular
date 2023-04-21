import { Component, OnInit } from '@angular/core';
import { BringDataService } from '../bring-data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  public info:any="";

  constructor(public bobj:BringDataService)
  {
    
  }
  public ngOnInit()
  {
    return this.bobj.GetData().subscribe(data=>this.info=data);
  }

}
