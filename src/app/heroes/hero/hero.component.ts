import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public name2: string = 'hulk'
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  };

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void{
    this.name = 'hulk';
  };

  changeAge(): void{
    this.age = 38;
  }

  resetForm(){
    this.name = 'ironman';
    this.age = 45;
  }
}
