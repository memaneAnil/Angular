import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  
  public no1 =0;
  no2=0;
  mult=1;
  transform(value: unknown, ...args: unknown[]): unknown {
    let i = 0;
    for (i = 0; i < args.length; i++) {
      this.mult = this.mult * (args[i] as number);
    }
    return this.mult;
  }

}
