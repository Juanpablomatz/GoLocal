import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../detail-modal/detail-modal.component'; // Importamos el detalle final

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ListModalComponent implements OnInit {

  @Input() categoryTitle: string = 'Lugares'; // Título de la sección (ej. "Taquerías")
  @Input() items: any[] = []; // La lista de lugares

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }

  // AL DAR CLIC EN UN NEGOCIO, ABRIMOS SU DETALLE
  async openDetail(item: any) {
    const modal = await this.modalCtrl.create({
      component: DetailModalComponent,
      componentProps: { data: item } // Le pasamos SOLO los datos de ese negocio
    });
    await modal.present();
  }
}