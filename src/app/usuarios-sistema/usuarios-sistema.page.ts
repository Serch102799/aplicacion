import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

// Definición de la interfaz UsuariosSistema
interface UsuariosSistema {
  id: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correoElectronico: string;
  usuario: string;
  rol: string;
}

@Component({
  selector: 'app-usuarios-sistema',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './usuarios-sistema.page.html',
  styleUrls: ['./usuarios-sistema.page.scss']
})
export class UsuariosSistemaPage {
  // Lista de usuarios usando la interfaz UsuariosSistema
  usuarios: UsuariosSistema[] = [
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
    // Lógica para consultar usuarios según tipoUsuario
  }

  eliminarUsuario() {
    // Lógica para eliminar usuario según usuarioAEliminar
  }

  regresar() {
    // Lógica para regresar a la página anterior
  }
}
