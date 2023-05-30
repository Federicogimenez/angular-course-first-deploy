import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 50
  }]

  @Output()
  public onDeleteCharacterEmmit: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string){    
    this.onDeleteCharacterEmmit.emit(id)
  }
}
