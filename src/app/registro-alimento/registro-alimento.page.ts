import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-alimento',
  templateUrl: './registro-alimento.page.html',
  styleUrls: ['./registro-alimento.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class RegistroAlimentoPage {
  alimento = {
    nombre: '',
    descripcion: '',
    precio: 0
  };

  constructor() {}

  onSubmit() {
    console.log('Alimento agregado:', this.alimento);
  }
}