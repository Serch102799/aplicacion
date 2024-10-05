import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss']
})
export class UsuariosPage {
  usuarios = [
    {
      id: 1,
      nombre: 'Sergio',
      apellidoPaterno: 'Carrillo',
      apellidoMaterno: 'Lome',
      correoElectronico: 'sergiocarrillo@gmail.com',
      usuario: 'Serch',
      rol: 'Admin'
    },
    {
      id: 4,
      nombre: 'Raul',
      apellidoPaterno: 'Martinez',
      apellidoMaterno: 'Rodriguez',
      correoElectronico: 'angel@gmail.com',
      usuario: 'Rangel',
      rol: 'Vendedor'
    },
    {
      id: 3,
      nombre: 'Angel',
      apellidoPaterno: 'Martinez',
      apellidoMaterno: 'Rodriguez',
      correoElectronico: 'angel@gmail.com',
      usuario: 'angel',
      rol: 'Vendedor'
    }
  ];

  tipoUsuario: string = 'Todos';
  usuarioAEliminar: string = '';

  constructor() {}

  consultar() {
  }

  eliminarUsuario() {
  }

  regresar() {
  }
}