import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculateService } from './calculate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gor1';
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataService: CalculateService) {
    this.myForm = formBuilder.group({
      number: new FormControl('', Validators.required)
    });

  }
clearCalc(): void{
  this.myForm.reset()
}
numClick(){
  let number = document.getElementById("calcNum") ;
  number.value = number.value + this.innerHTML;
  console.log(number);
 console.log(this);

}
addFun(){
  let number = document.getElementById("calcNum") ; 
  this.dataService.val1 = number.value;
  console.log(this.dataService.val1);
this.myForm.reset();
}
submitFun(){
  let number = document.getElementById("calcNum") ; 
  this.dataService.add( number.value);
  console.log(this.dataService.val1);
  number.value = this.dataService.val1;
}
ngOnInit(): void {
 document.getElementById("clearSubmit").addEventListener('click', this.clearCalc.bind(this));
 document.getElementsByName("num").forEach((e: HTMLElement) => { e.addEventListener('click', this.numClick.bind(e))})
 document.getElementById("addSubmit").addEventListener('click', this.addFun.bind(this));
  document.getElementById("enterSubmit").addEventListener('click', this.submitFun.bind(this))
  
}
}
