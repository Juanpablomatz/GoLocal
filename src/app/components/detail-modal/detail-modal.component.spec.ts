import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
  standalone: true,  // <--- ESTO ES LA CLAVE
  imports: [IonicModule, CommonModule] // <--- Importamos lo necesario aquí
})
export class DetailModalComponent implements OnInit {

  @Input() data: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }
}