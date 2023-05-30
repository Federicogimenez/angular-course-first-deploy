import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <span>Counter: {{ counter }}</span>
    <br />
    <button (click)="buttonOperator(-1)">resta 1 a counter</button>
    <br />
    <button (click)="buttonReset()">reset</button>
    <br />
    <button (click)="buttonOperator(1)">suma 1 a counter</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  buttonOperator = (value: number): void => {
    this.counter += value;
  };
  buttonReset = () => {
    this.counter = 10;
  };
}
