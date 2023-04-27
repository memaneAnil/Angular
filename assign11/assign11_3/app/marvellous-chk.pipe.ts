import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {
public No=0;
public str="";
  transform(value: unknown, ...args: unknown[]): unknown {
    this.No=value as number;
    if(args[0]=="Even")
    {
      if(Math.floor(this.No%2)==0)
      {
        this.str="Even number";
      }
      else
      {
        this.str="It is not Even";
      }
    }
    if(args[0]=="Odd")
    {
      if(Math.floor(this.No%2)!=0)
      {
        this.str="Odd number";
      }
      else
      {
        this.str="It is not Odd";
      }
    }
    if(args[0]=="Prime")
    {
      let i=0;
      for(i=2;i<(Math.floor(this.No/2+1));i++)
      {
        if(Math.floor(this.No%i)==0)
        {
          break;
        }
      }
      if(i==(Math.floor(this.No/2+1)))
      {
        this.str="Prime number";
      }
      else
      {
        this.str="Not a Prime number";
      }
    }
    if(args[0]=="Perfect")
    {
      let i=0;
      let iSum=0;
      for(i=1;i<(Math.floor(this.No/2+1));i++)
      {
        if(Math.floor(this.No%i)==0)
        {
          iSum=iSum+i;
        }
      }
      if(iSum==this.No)
      {
        this.str="Perfect number";
      }
      else
      {
        this.str="Not a Perfect number";
      }
    }
    return this.str;
  }

}
