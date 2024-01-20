import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valor') progreso : number = 50; 
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida : EventEmitter<number> = new EventEmitter();

  cambiarValor (valor : number) {

    if (this.progreso >= 100 && valor >= 0)
    {
      this.progreso = 100;
      this.valorSalida.emit(this.progreso);
      return;
    }

    if (this.progreso <= 0 && valor < 0)
    {
      this.progreso = 0;
      this.valorSalida.emit(this.progreso);
      return;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor : number) {
    if (nuevoValor == null || nuevoValor <= 0)
    {
      this.progreso = 0;
      console.log(nuevoValor);
    }
    else if (nuevoValor >= 100) {
      this.progreso = 100;
      console.log(nuevoValor);
    }
    else 
    {
      this.progreso = nuevoValor;
      console.log(nuevoValor);
    }

    this.valorSalida.emit(this.progreso);
  }

  
}
