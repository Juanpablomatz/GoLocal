import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. IMPORTAMOS FormsModule para el texto y AlertController para las alertas
import { FormsModule } from '@angular/forms'; 
import { IonicModule, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: 'detalle_lugar.html',     
  styleUrls: ['detalles_lugar.scss'],    
  standalone: true,
  // 2. AGREGAMOS FormsModule AQUÍ
  imports: [IonicModule, CommonModule, FormsModule], 
})
export class DetalleLugarComponent implements OnInit {

  @Input() lugar: any;

  // Variables para guardar lo que el usuario elija
  ratingUsuario: number = 0;      // Cuántas estrellas seleccionó
  comentarioUsuario: string = ''; // El texto que escribió
  arrayEstrellas = [1, 2, 3, 4, 5]; // Ayuda para dibujar las 5 estrellas

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController // Inyectamos el control de alertas
  ) {}

  ngOnInit() {
    if (!this.lugar) {
      this.lugar = { nombre: 'Sin datos' };
    }
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  irAlMapa() {
    if (this.lugar && this.lugar.urlMapa) {
      window.open(this.lugar.urlMapa, '_system');
    }
  }

  // Función al tocar una estrella
  seleccionarEstrella(valor: number) {
    this.ratingUsuario = valor;
  }

  // Función al enviar la reseña
  async enviarResena() {
    // Aquí podrías guardar los datos en una base de datos real en el futuro
    console.log('Estrellas:', this.ratingUsuario);
    console.log('Comentario:', this.comentarioUsuario);

    const alert = await this.alertCtrl.create({
      header: '¡Gracias!',
      message: 'Tu reseña ha sido enviada correctamente.',
      buttons: ['OK']
    });

    await alert.present();
    
    // Opcional: Cerrar el modal al enviar
    // this.cerrar(); 
  }
}