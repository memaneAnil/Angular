import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {
  public no1=0;
  no2=0;
  add=0;

  transform(value: number, ...args: number[]): unknown {
    
    this.add=value+args[0];
    
    return this.add;
  }

}
