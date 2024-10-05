import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss']
})
export class AdministradorPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickRUsuario(){
    this.router.navigate(['/registro']);
  }
  onClickUsuario(){
    this.router.navigate(['/usuarios']);
  }

  onClickLog(){
    this.router.navigate(['/registro-log']);
  }

  onClickABebida(){
    this.router.navigate(['/registro-bebida']);
  }

  onClickAAlimento(){
    this.router.navigate(['/registro-alimento']);
  }

  onClickSalir(){
    this.router.navigate(['/login']);
  }
}
