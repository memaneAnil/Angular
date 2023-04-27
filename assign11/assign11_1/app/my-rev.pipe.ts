import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {
  public str1="";
  public str2="";
  transform(value: unknown, ...args: unknown[]): unknown {
    this.str1=value+"";
    let i=0;
    
    for(i=(this.str1.length-1);i>=0;i--)
    {
      this.str2=this.str2+this.str1.charAt(i);
    }

    return this.str2;
  }

}
