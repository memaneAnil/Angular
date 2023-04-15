import { Component, EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent {
  public cmsg : any;
  @Output() public event = new EventEmitter();

  public sendData()
  {
    
    this.cmsg =<HTMLInputElement>document.getElementById("name");
    this.event.emit(this.cmsg.value);
  }
}
