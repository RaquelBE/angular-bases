import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  //elimina el id
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()
;  

  onDeleteCharacter(id?: string):void {
    //emitir el ID del personaje
    if (!id) return;
    this.onDelete.emit(id);
  }
 }
