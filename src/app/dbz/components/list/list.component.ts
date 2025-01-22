import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public deleteCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    //TODO: Emitir el ID del personaje
    console.log('Index del elemento: ', index);
  }

  onDelete(id: string): void {
    this.deleteCharacter.emit(id);
  }

}
