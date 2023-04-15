import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent {
  @Input() public container = "";
  @Output() public cmsg = new EventEmitter();

  public sendData()
  {
      this.cmsg.emit("Hello parent");
  }
}
