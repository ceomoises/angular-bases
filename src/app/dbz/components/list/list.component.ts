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
  public onDelete = new EventEmitter<string>();

   //Como ID es opcional en la interfaz,
  //hay que estar seguros de que haya uno.
  onDeleteCharacter(id? :string):void{
    if( !id ) return;
    this.onDelete.emit(id);
  }


}
