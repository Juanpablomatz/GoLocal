import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController, ToastController } from '@ionic/angular'; // Agregamos Toast
import { FormsModule } from '@angular/forms'; // Necesario para los inputs

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailModalComponent implements OnInit {

  @Input() data: any;
  
  // Variables para la nueva reseña
  newComment: string = '';
  newRating: number = 0;
  starsArray = [1, 2, 3, 4, 5]; // Para dibujar las estrellas

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    // Asegurarnos de que el array de reseñas exista
    if (!this.data.reviews) {
      this.data.reviews = [];
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

  // Función para seleccionar estrellas
  setRating(stars: number) {
    this.newRating = stars;
  }

  // Función para agregar la reseña
  async addReview() {
    if (this.newComment.trim() === '' || this.newRating === 0) {
      // Mostrar error si falta info
      const toast = await this.toastCtrl.create({
        message: 'Por favor escribe un comentario y selecciona estrellas.',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    // Crear objeto reseña
    const review = {
      user: 'Usuario Invitado', // En el futuro usaremos el nombre real del registro
      stars: this.newRating,
      comment: this.newComment
    };

    // Agregar al inicio de la lista
    this.data.reviews.unshift(review);

    // Limpiar formulario
    this.newComment = '';
    this.newRating = 0;

    const toast = await this.toastCtrl.create({
      message: '¡Reseña publicada!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}