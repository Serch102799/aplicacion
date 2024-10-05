import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.page.html',
  styleUrls: ['./vendedor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class VendedorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}