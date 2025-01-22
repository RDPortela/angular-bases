import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
    selector: 'app-dbz-main-pages',
    standalone: false,
    templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {

    constructor(private dbzService: DbzService) { }

    get characters(): Character[] {
        return [...this.dbzService.characters];
    }

    onDeletedCharacter(id: string): void {
        this.dbzService.onDeleteCharacterById(id);
    }

    onNewCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
    }
}