import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  public No = 0;
  public str = "";
  transform(value: unknown, ...args: unknown[]): unknown {
    //this.No = value as number;
    if (value == "Even") {
      if (Math.floor((args[0]as number) % 2) == 0) {
        this.str = "Even number";
      }
      else {
        this.str = "It is not Even";
      }
    }
    if (value == "Odd") {
      if (Math.floor((args[0]as number) % 2) != 0) {
        this.str = "Odd number";
      }
      else {
        this.str = "It is not Odd";
      }
    }
    if (value == "Prime") {
      let i = 0;
      for (i = 2; i < (Math.floor((args[0]as number) / 2 + 1)); i++) {
        if (Math.floor((args[0]as number) % i) == 0) {
          break;
        }
      }
      if (i == (Math.floor((args[0]as number) / 2 + 1))) {
        this.str = "Prime number";
      }
      else {
        this.str = "Not a Prime number";
      }
    }
    if (value == "Perfect") {
      let i = 0;
      let iSum = 0;
      for (i = 1; i < (Math.floor((args[0]as number) / 2 + 1)); i++) {
        if (Math.floor((args[0]as number) % i) == 0) {
          iSum = iSum + i;
        }
      }
      //
      if (iSum == (args[0]as number)) {
        this.str = "Perfect number";
      }
      else {
        this.str = "Not a Perfect number";
      }
    }
    console.log("=="+this.str)
    return this.str;
  }
 
}
