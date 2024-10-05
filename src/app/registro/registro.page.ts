import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class RegistroPage {
  venta = {
    nombreAlimento: '',
    nombreBebida: '',
    cantidadAlimento: 0,
    cantidadBebida: 0
  };

  constructor() {}

  onSubmit() {
    console.log('Venta registrada:', this.venta);
  }
}