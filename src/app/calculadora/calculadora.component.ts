import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  n1: number = 0;
  n2: number = 0;
  resultado: number = 0;


  sumar(): void {
    this.resultado = this.n1 + this.n2;
  }

  restar(): void {
    this.resultado = this.n1 - this.n2;
  }
}
