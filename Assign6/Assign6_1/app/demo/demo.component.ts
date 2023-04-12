import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public str = "Marvellous Infosystems"
  public str1 = "";

  public displayUpper()
  {
    return (this.str=this.str.toUpperCase()); 
  }
  public displayLower()
  {
    return (this.str=this.str.toLowerCase());
  }
}
