import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  protected heroesNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman', 'Captain America', 'Black Panter'];

  
  protected deletedHeroe?: string;
  
  
  removeHero(){
    this.deletedHeroe = this.heroesNames.pop();
  }
}
