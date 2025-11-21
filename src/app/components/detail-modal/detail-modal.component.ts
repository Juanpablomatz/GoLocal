import { Component, Input } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html', // Asegúrate que coincida con tu nombre de archivo
  styleUrls: ['./detail-modal.component.scss'], // Asegúrate que coincida con tu nombre de archivo
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailModalComponent {

  @Input() data: any; 
  lugarSeleccionado: any = null;
  ratingUsuario: number = 0;
  comentarioUsuario: string = '';

  constructor(private modalCtrl: ModalController) {}

  // ESTA ES LA FUNCIÓN QUE FALTABA O SE LLAMABA DIFERENTE
  cerrar() {
    this.modalCtrl.dismiss();
  }

  verDetalle(lugar: any) {
    this.lugarSeleccionado = lugar;
  }

  volverALista() {
    this.lugarSeleccionado = null;
  }

  irAlMapa() {
    if (this.lugarSeleccionado && this.lugarSeleccionado.urlMapa) {
      window.open(this.lugarSeleccionado.urlMapa, '_system');
    }
  }

  guardarResena() {
    console.log('Enviando reseña...', this.ratingUsuario, this.comentarioUsuario);
    this.cerrar();
  }
}