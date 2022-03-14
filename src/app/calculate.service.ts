import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  val1: number;
  val2: number;
  add(num){

    let a=this.val1;
   let  b=parseInt(num);
    
    var sum=0, carry=0, d=0, m = 1;
    while(a|| b|| carry) 
    {
    d=0;
    d=carry+(a%10)+(b%10);
    d=Math.floor(d);
    //alert(d);
    a/=10;
    a=Math.floor(a);
    b/=10;
    b=Math.floor(b);
    if(d>7) {
    carry=1;
    d=d%8;
    d=Math.floor(d);
    } else {
    carry = 0;
    }
    sum += d*m;
    m *= 10;
    }
    
    this.val1=sum;
  }
  constructor() { }
}
