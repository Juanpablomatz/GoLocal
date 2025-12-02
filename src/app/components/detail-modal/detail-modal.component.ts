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
  
  newComment: string = '';
  newRating: number = 0;
  starsArray = [1, 2, 3, 4, 5];

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    // Si no existe la lista de reseñas en el objeto, la creamos
    if (!this.data['reseñas']) {
      this.data['reseñas'] = [];
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

  setRating(stars: number) {
    this.newRating = stars;
  }

  async addReview() {
    // Validación simple
    if (this.newComment.trim() === '' || this.newRating === 0) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor califica y escribe algo.',
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

    // Agregamos a la lista original (usando corchetes por la ñ)
    this.data['reseñas'].unshift(review);

    // Limpiamos el formulario
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