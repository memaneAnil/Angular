import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  public no1 = 0;
  no2 = 0;
  add = 0;

  transform(value: unknown, ...args: number[]): unknown {
    console.log(value);
    let i = 0;
    for (i = 0; i < args.length; i++) {
      this.add = this.add + args[i];
    }
    return this.add;
  }

}
