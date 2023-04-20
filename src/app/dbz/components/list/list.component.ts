import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input('Arreglo')
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 1000
  }]

  @Output()
  public onDelete = new EventEmitter<number>();

  onDeleteCharacter(index:number):void{
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(index);
  }


}
