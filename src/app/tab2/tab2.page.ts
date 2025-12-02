import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class Tab2Page implements OnInit, OnDestroy {

  map: L.Map | undefined;

  constructor(private dataService: DataService) {}

  // Usamos ionViewDidEnter para asegurar que el HTML ya existe antes de cargar el mapa
  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    // 1. Si el mapa ya existe, lo borramos para no duplicarlo
    if (this.map) {
      this.map.remove();
    }

    // 2. Coordenadas iniciales (Centro de Calvillo)
    const centroCalvillo: [number, number] = [21.8469, -102.7189];

    // 3. Crear el mapa
    this.map = L.map('mapId').setView(centroCalvillo, 14);

    // 4. Ponerle la "piel" (Estilo callejero claro)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // 5. PEDIR LOS LUGARES A LA BASE DE DATOS
    this.dataService.getAllPlaces().subscribe(lugares => {
      
      lugares.forEach(lugar => {
        if (lugar.ubicacion && lugar.ubicacion.lat) {
          
          // --- AQUÍ ELEGIMOS EL SIMBOLITO ---
          const emoji = this.getEmojiPorCategoria(lugar.categoria_principal);

          // Creamos un icono personalizado (DivIcon)
          const customIcon = L.divIcon({
            className: 'custom-marker', // Clase CSS que definiremos abajo
            html: `<div style="font-size: 30px;">${emoji}</div>`, // El emoji gigante
            iconSize: [30, 30],
            iconAnchor: [15, 15] // Centrarlo
          });

          // Poner el marcador en el mapa
          L.marker([lugar.ubicacion.lat, lugar.ubicacion.lng], { icon: customIcon })
            .addTo(this.map!)
            .bindPopup(`<b>${lugar.titulo}</b><br>${lugar.descripcion}`);
        }
      });

    });
  }

  // Diccionario de Emojis
  getEmojiPorCategoria(cat: string): string {
    switch (cat) {
      case 'taquerias': return '🌮';
      case 'restaurantes': return '🍴';
      case 'pizzeria': return '🍕';
      case 'cascadas': return '🌊';
      case 'presas': return '💧';
      case 'albercas': return '🏊';
      case 'hoteles': return '🏨';
      case 'cabanas': return '🏡';
      case 'museo': return '🏛️';
      case 'dulces': return '🍬';
      case 'panaderias': return '🥐';
      default: return '📍'; // Globo rojo si no sabemos qué es
    }
  }

  ngOnDestroy() {
    if (this.map) this.map.remove();
  }
  ngOnInit() {}
}