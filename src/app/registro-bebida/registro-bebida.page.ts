import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-bebida',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './registro-bebida.page.html',  
  styleUrls: ['./registro-bebida.page.scss'],
})
export class RegistroBebidaPage {
  bebida = {
    nombre: '',
    sabor: '',
    marca: '',
    tamano: '',  
    precioUnitario: '',
    cantidad: ''
  };

  agregarBebida() {
    console.log('Bebida agregada:', this.bebida);
  }

  regresar() {
    console.log('Regresar');
  }

  salir() {
    console.log('Salir');
  }
}
