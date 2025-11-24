import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class RegisterPage implements OnInit {

  // ¡LISTA AMPLIADA DE INTERESES!
  intereses = [
    { nombre: 'Gastronomía 🌮', seleccionado: false },
    { nombre: 'Naturaleza 🌲', seleccionado: false },
    { nombre: 'Historia 📜', seleccionado: false },
    { nombre: 'Pueblear 🚶‍♂️', seleccionado: false },
    { nombre: 'Fotografía 📸', seleccionado: false },
    { nombre: 'Aventura Extrema 🧗', seleccionado: false },
    { nombre: 'Artesanías 🧶', seleccionado: false },
    { nombre: 'Relax & Spa 💆‍♂️', seleccionado: false },
    { nombre: 'Vida Nocturna 🎉', seleccionado: false },
    { nombre: 'Museos 🏛️', seleccionado: false },
    { nombre: 'Ruta de la Guayaba 🍋', seleccionado: false },
    { nombre: 'Ciclismo 🚴', seleccionado: false },
    { nombre: 'Camping ⛺', seleccionado: false },
    { nombre: 'Arquitectura ⛪', seleccionado: false },
    { nombre: 'Dulces Típicos 🍬', seleccionado: false },
    { nombre: 'Romántico ❤️', seleccionado: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  // Función para marcar/desmarcar intereses
  toggleInteres(index: number) {
    this.intereses[index].seleccionado = !this.intereses[index].seleccionado;
  }

}