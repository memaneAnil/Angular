import { Component, OnInit } from '@angular/core';
import { BringDataService } from '../bring-data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public info:any="";

  constructor(public bobj:BringDataService)
  {
    
  }
  public ngOnInit()
  {
    return this.bobj.GetData().subscribe(data=>this.info=data);
  }
}
