import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailModalComponent implements OnInit {

  @Input() data: any;
  
  // Variable limpia (SIN EÑE) para usar en el HTML
  reviewsList: any[] = [];

  newComment: string = '';
  newRating: number = 0;
  starsArray = [1, 2, 3, 4, 5];

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    // AQUÍ ESTÁ EL TRUCO:
    // Pasamos los datos de "reseñas" (con ñ) a "reviewsList" (sin ñ)
    // Usamos ['brackets'] para que TypeScript no se queje de la ñ
    if (this.data) {
      this.reviewsList = this.data['reseñas'] || this.data['reviews'] || [];
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

  setRating(stars: number) {
    this.newRating = stars;
  }

  async addReview() {
    if (this.newComment.trim() === '' || this.newRating === 0) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor escribe un comentario y selecciona estrellas.',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    const review = {
      user: 'Usuario Invitado',
      stars: this.newRating,
      comment: this.newComment
    };

    // Agregamos a la lista limpia
    this.reviewsList.unshift(review);

    // Intentamos guardar en el objeto original también (por si acaso)
    if(this.data['reseñas']) {
       this.data['reseñas'].unshift(review);
    }

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