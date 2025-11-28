import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // <--- IMPORTANTE para que funcione [(ngModel)]

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // <--- Agrega FormsModule aquí
})
export class DetailModalComponent implements OnInit {

  // Recibimos todos los datos del lugar
  @Input() data: any;

  // Variables para la lógica de reseñas
  starsArray: number[] = [1, 2, 3, 4, 5];
  newRating: number = 0;
  newComment: string = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    // Si data no tiene reseñas iniciales, aseguramos que sea un array vacío para evitar errores
    if (this.data && !this.data.reviews) {
      this.data.reviews = [];
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

  // Función para seleccionar estrellas
  setRating(rating: number) {
    this.newRating = rating;
  }

  // Función para publicar la reseña
  addReview() {
    if (this.newRating === 0 || this.newComment.trim() === '') {
      // Aquí podrías poner una alerta si quieres validar
      return;
    }

    const review = {
      user: 'Usuario', // Aquí podrías poner el nombre real si tuvieras auth
      stars: this.newRating,
      comment: this.newComment
    };

    // Agregamos la reseña al array local para que se vea al instante
    this.data.reviews.push(review);

    // Limpiamos el formulario
    this.newRating = 0;
    this.newComment = '';
  }
}