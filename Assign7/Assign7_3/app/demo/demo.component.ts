import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public str = "Marvellous Infosystems";

  public display()
  {
    this.str ="Educating for Better tomorrow";
    
  }
}
