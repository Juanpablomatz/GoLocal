import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

// 1. IMPORTAR LOS ICONOS Y EL REGISTRADOR
import { addIcons } from 'ionicons';
import { star, starOutline, locationOutline, closeCircle } from 'ionicons/icons';

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
  ) { 
    // 2. REGISTRAR LOS ICONOS PARA QUE SE VEAN
    addIcons({ star, starOutline, locationOutline, closeCircle });
  }

  ngOnInit() {
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
    // Validación
    if (this.newComment.trim() === '' || this.newRating === 0) {
      const toast = await this.toastCtrl.create({
        message: '⚠️ Por favor selecciona estrellas y escribe un comentario.',
        duration: 3000,
        color: 'dark', // 3. CAMBIO DE COLOR: 'dark' (Negro) para que se lea bien
        position: 'bottom'
      });
      toast.present();
      return;
    }

    const review = {
      user: 'Usuario Invitado',
      stars: this.newRating,
      comment: this.newComment
    };

    this.data['reseñas'].unshift(review);

    this.newComment = '';
    this.newRating = 0;

    const toast = await this.toastCtrl.create({
      message: '✅ ¡Reseña publicada!',
      duration: 2000,
      color: 'success', // Verde
      position: 'bottom'
    });
    toast.present();
  }
}