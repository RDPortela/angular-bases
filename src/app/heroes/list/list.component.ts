import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNamer: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroesNamer.pop();
  }
}
