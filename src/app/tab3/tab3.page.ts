import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { ListModalComponent } from '../components/list-modal/list-modal.component'; // Reusamos el componente de lista

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ListModalComponent],
})
export class Tab3Page implements OnInit {
  
  // Aquí guardaremos los lugares que coincidan con los gustos
  rutaSugerida: any[] = [];
  misIntereses: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.cargarRuta();
  }

  // Esta función se ejecuta cada vez que entras a la pestaña
  ionViewWillEnter() {
    this.cargarRuta();
  }

  cargarRuta() {
    // 1. SIMULACIÓN: Recuperamos los intereses del usuario
    // (En el futuro esto vendrá del Login real)
    // Por ahora, supongamos que al usuario le gusta esto:
    const interesesGuardados = localStorage.getItem('userInterests');
    
    if (interesesGuardados) {
      this.misIntereses = JSON.parse(interesesGuardados);
    } else {
      // Si no ha elegido nada, usamos unos por defecto para probar
      this.misIntereses = ['comida', 'naturaleza']; 
    }

    console.log("Buscando rutas para:", this.misIntereses);

    // 2. Pedimos al servidor la ruta mágica
    this.dataService.getRecommendations(this.misIntereses).subscribe(data => {
      this.rutaSugerida = data;
      console.log("Lugares encontrados:", data);
    });
  }
}