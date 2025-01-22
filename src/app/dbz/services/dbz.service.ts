import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 150
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 1000
    }
  ];

  addCharacter(character: Character): void {

    const newAddCharacter = {
      id: uuid(),
      name: character.name,
      power: character.power
    }
    this.characters.push(newAddCharacter);

    console.log(this.characters);
  }

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }
}
