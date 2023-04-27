import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {
  public no1 =0;
  no2=0;
  mult=0;
  transform(value: unknown, ...args: unknown[]): unknown {
    this.no1=value as number;
   this.no2= args[0] as number;
   this.mult= this.no1*this.no2;
    return this.mult;
  }

}
