import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-log',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './registro-log.page.html',
  styleUrls: ['./registro-log.page.scss']
})
export class RegistroLogPage {
  usuarios = [
    {
      id: 1,
      nombre: 'Sergio',
      apellidoPaterno: 'Carrillo',
      usuario: 'Serch',
      rolActual: '(1,Admin,"Usuario modo Dios")',
      ultimaAccion: 'INSERT',
      fechaModificacion: '2024-02-09 21:11:33.658325'
    },
    {
      id: 3,
      nombre: 'Angel',
      apellidoPaterno: 'Martinez',
      usuario: 'angel',
      rolActual: '(2,Vendedor,"Solo Ventas")',
      ultimaAccion: 'INSERT',
      fechaModificacion: '2024-02-08 21:06:54.504126'
    },
    {
      id: 4,
      nombre: 'Raul',
      apellidoPaterno: 'Martinez',
      usuario: 'Rangel',
      rolActual: '(2,Vendedor,"Solo Ventas")',
      ultimaAccion: 'INSERT',
      fechaModificacion: '2024-02-08 21:11:33.658325'
    }
  ];

  constructor() {}
}
