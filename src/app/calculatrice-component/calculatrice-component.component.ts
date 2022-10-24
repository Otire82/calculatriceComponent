import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice-component.component.html',
  styleUrls: ['./calculatrice-component.component.css']
})
export class CalculatriceComponentComponent implements OnInit {

  nb1 = 0; // ou nb1: number =0;
  nb2 = 0;

  result!: number;

  constructor() { }
  ngOnInit(): void {
  }
  generateFirstNumber(): void{
    this.nb1 = Math.round(Math.random() * 10);
  }
  generateSecondNumber(): void{
    this.nb2 = Math.round(Math.random() * 10);
  }

  add():void{
    this.result = this.nb1+this.nb2;
  }

  substract():void{
    this.result = this.nb1-this.nb2;
  }

  multiply():void{
    this.result = this.nb1*this.nb2;
  }
  
  divide():void{
    this.result = this.nb1/this.nb2;
  }

}
