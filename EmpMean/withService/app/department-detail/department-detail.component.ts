import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EinfoService } from '../einfo.service';
@Component({
  selector: 'app-department-detail',
  template: `
    <h2>Thank for selecting the department</h2>
    <div *ngFor="let value of empInfo">
    
     <p *ngIf="departmentId==value.id">{{value.name}} - {{value.age}} - {{value.salary}}</p></div>  
    <router-outlet></router-outlet>
    
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  empInfo:any=[];
  public departmentId : any;
  constructor(private route: ActivatedRoute, private router: Router,private einfo:EinfoService) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentId = id;
      this.einfo.getEmpInfo().subscribe(res=>{this.empInfo=res})
      
      //console.log(this.);
    });
  }
  

  gotoDepartments() 
  {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
}
