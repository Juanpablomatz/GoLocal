import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { ListModalComponent } from '../components/list-modal/list-modal.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ListModalComponent],
})
export class Tab3Page implements OnInit {
  
  // Aquí guardaremos los lugares que encuentre la inteligencia
  rutaSugerida: any[] = [];
  
  // SIMULACIÓN: Estos son los gustos del usuario
  // (Asegúrate de que en Mongo tengas lugares con estas etiquetas)
  misIntereses:  string[] = ['comida', 'tacos'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.cargarRecomendaciones();
  }

  // Se ejecuta cada vez que entras a la pestaña
  ionViewWillEnter() {
    this.cargarRecomendaciones();
  }

  cargarRecomendaciones() {
    console.log("Buscando recomendaciones para:", this.misIntereses);

    // Pedimos al servidor que filtre por nuestros gustos
    this.dataService.getRecommendations(this.misIntereses).subscribe(
      (data) => {
        this.rutaSugerida = data;
        console.log("Lugares encontrados:", data);
      },
      (error) => {
        console.error("Error cargando recomendaciones:", error);
      }
    );
  }
}