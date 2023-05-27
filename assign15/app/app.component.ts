import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testDemo';
  
  countCapital(str:string)
  {
    let i = 0,count = 0;
    for(i=0;i<str.length;i++)
    {
      if(str[i]>='A'&&str[i]<='Z')
      {
        count++;
      }
    }
    return count;
  }
  checkPassword(str:string)
  {
    let i = 0,cntCap= 0,cntSm=0,cntDigit=0,cntSymbol=0;
    for(i=0;i<str.length;i++)
    {
      if(str[i]>='A'&&str[i]<='Z')
      {
        cntCap++;
      }
      else if(str[i]>='a'&&str[i]<='z'){
        cntSm++;
      }
      else if(str[i]>='0'&&str[i]<='9'){
        cntDigit++;
      }
      else if(str[i]>=' '&&str[i]<='/'
      ||str[i]>=':'&&str[i]<='@'
      ||str[i]>='\\'&&str[i]<='`'
      ||str[i]>='{'&&str[i]<='~'){
        cntSymbol++;
      }
    }
    //console.log(cntCap+":"+cntSm+":"+cntDigit+":"+cntSymbol)
    if(cntCap>=2 && cntSm>=3 && cntDigit>=2 && cntSymbol>=1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  arrayAddition(arr:number[])
  {
    let sum = 0,i =0;
    for(i=0;i<arr.length;i++)
    {
      sum=sum+arr[i]
    }
    return sum;
  } 
}
