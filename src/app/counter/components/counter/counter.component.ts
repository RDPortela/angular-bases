import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `<h3>Counter: {{couter}}</h3>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="resetCount()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>`,
    standalone: false,
})
export class CounterComponent {

    public couter: number = 10;

    increaseBy(value: number): void {
        this.couter += value;
    }

    resetCount(): void {
        this.couter = 10;
    }
}