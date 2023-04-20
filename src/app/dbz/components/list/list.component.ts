import { Component, Input } from '@angular/core';
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




}
