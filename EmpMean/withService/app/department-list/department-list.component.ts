import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { EinfoService } from '../einfo.service';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Select Your Departments
    </h3>
    <ul class="items">
      <li *ngFor="let department of departments" [class.selected]="isSelected(department)" (click)="onSelect(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
  </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  empInfo:any=[];
  public selectedId : any;
  departments = [
    {"id": 1, "name": "Dev"},
    {"id": 2, "name": "Testing"},
    {"id": 3, "name": "Quality Assurance"},
    {"id": 4, "name": "Support"},
    {"id": 5, "name": "Back Office"}
  ]
  constructor(private router: Router, private route: ActivatedRoute,private einfo:EinfoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.selectedId = id;
      console.log(this.selectedId)
    } );
  }

  onSelect(department : any) 
  {
      this.einfo.getEmpInfo().subscribe(res=>{this.empInfo=res})
      //let i=0;
      //for(i=0;i<this.empInfo.length;i++)
      console.log(this.empInfo);
     this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department : any) 
  { return department.id === this.selectedId; }
}
