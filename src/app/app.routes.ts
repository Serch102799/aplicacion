import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    redirectTo: 'login', // Redirige a 'home' cuando la ruta está vacía
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'administrador',
    loadComponent: () => import('./administrador/administrador.page').then(m => m.AdministradorPage)
  },
  {
    path: '',
    redirectTo: 'administrador',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./usuarios/usuarios.page').then( m => m.UsuariosPage)
  },
  {
    path: 'usuarios-sistema',
    loadComponent: () => import('./usuarios-sistema/usuarios-sistema.page').then( m => m.UsuariosSistemaPage)
  },
  {
    path: 'registro-log',
    loadComponent: () => import('./registro-log/registro-log.page').then( m => m.RegistroLogPage)
  },
  {
    path: 'registro-bebida',
    loadComponent: () => import('./registro-bebida/registro-bebida.page').then( m => m.RegistroBebidaPage)
  },
  {
    path: 'registro-alimento',
    loadComponent: () => import('./registro-alimento/registro-alimento.page').then( m => m.RegistroAlimentoPage)
  },
  {
    path: 'vendedor',
    loadComponent: () => import('./vendedor/vendedor.page').then( m => m.VendedorPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  }
];
