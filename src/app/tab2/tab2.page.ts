import { Component, OnInit, OnDestroy } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import * as L from "leaflet";
import { DataService } from "../services/data.service";

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

  ngOnInit() {
    // Esperamos para que la vista cargue el mapa
    setTimeout(() => {
      this.initMap();
    }, 500);
  }

  initMap() {
    // Coordenadas de Calvillo
    const calvilloCoords: [number, number] = [21.8469, -102.7189];

    // openStreetMap - Gratis
    this.map = L.map('mapId').setView(calvilloCoords, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OpenStreetMap contributors'
    }).addTo(this.map);

    // Agregar un marcador de ejemplo
    const marker = L.marker(calvilloCoords).addTo(this.map);
    marker.bindPopup("<b>Calvillo</b><br>Pueblo mágico").openPopup();
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }

}
