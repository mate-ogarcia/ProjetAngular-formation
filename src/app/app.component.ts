import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // ------------------------------------------------------------

  title = 'test';
  inputValue = '';
  disabledButton = true;
  divStyle : string = "text-align:center";
  divClass : string = "text-center";
  isCentered: boolean = true;
  ages:number[] = [10,12,14];
  people:({name:string, age:number})[] = [
    {name: 'John', age: 20},
    {name: 'Jane', age: 21},
    {name: 'Jim', age: 22},
    {name: 'Jill', age: 23},
    {name: 'Jack', age: 24},
  ];

  userRole:'admin' | 'user' | 'guest' = 'admin';

  ngOnInit() {
    console.log('ngOnInit');
  }

  logKeyUpEvent(event: KeyboardEvent) {
    // const input = event.target as HTMLInputElement;
    // this.inputValue = input.value;
    console.log(event);
  }

  // ------------------------------------------------------------

  constructor(public router: Router) {} // pour avoir accès à la route

}
