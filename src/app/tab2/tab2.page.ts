import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet'; // El motor del mapa
import { DataService } from '../services/data.service'; // Tus datos

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab2Page implements OnInit {

  map: L.Map | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Esperamos un poco para que el diseño cargue
    setTimeout(() => {
      this.initMap();
    }, 500);
  }

  initMap() {
    // 1. Centro del mapa (Calvillo)
    const calvilloCoords: [number, number] = [21.8469, -102.7189];

    this.map = L.map('mapId').setView(calvilloCoords, 13);

    // 2. Capa visual (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© GoLocal'
    }).addTo(this.map);

    // 3. PEDIR LUGARES A MONGO Y PONER MARCADORES
    this.dataService.getAllPlaces().subscribe(lugares => {
      
      console.log("Cargando en mapa:", lugares);

      lugares.forEach(lugar => {
        // Solo si tiene coordenadas válidas
        if (lugar.ubicacion && lugar.ubicacion.lat && lugar.ubicacion.lng) {
          
          // Crear marcador
          const marker = L.marker([lugar.ubicacion.lat, lugar.ubicacion.lng])
            .addTo(this.map!)
            .bindPopup(`
              <b>${lugar.titulo}</b><br>
              <img src="${lugar.imagen}" style="width:100px; height:60px; object-fit:cover; margin-top:5px;">
            `);
        }
      });

    });
  }
}