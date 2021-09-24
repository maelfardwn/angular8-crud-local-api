import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickedCounter:number =0
  name:string =''
  constructor() { }

  ngOnInit(): void {
  }
  setClasses(){
    let myClasses = {
      active: this.clickedCounter > 5,
      notactive: this.clickedCounter <=5
    }
    return myClasses
  }
  countClick(){
    this.clickedCounter +=1
  }
}
