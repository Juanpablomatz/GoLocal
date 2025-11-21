import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importamos el servicio de datos
import { DataService } from '../services/data.service';

// Importamos el componente del Modal (El bonito)
// Si esta línea marca error rojo, ve al Paso 3
import { DetailModalComponent } from '../components/detail-modal/detail-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, DetailModalComponent]
})
export class Tab1Page implements OnInit {
  
  texts: any = {};
  darkMode = false;
  
  catList: any[] = [
    { key: 'taquerias', icon: '🌮', style: 'c-food' },
    { key: 'restaurantes', icon: '🍴', style: 'c-eat' },
    { key: 'cascadas', icon: '🏞', style: 'c-nature' },
    { key: 'presas', icon: '💧', style: 'c-water' },
    { key: 'cabanas', icon: '🏡', style: 'c-stay' },
    { key: 'hoteles', icon: '🏨', style: 'c-stay' },
    { key: 'turismo', icon: '🌟', style: 'c-fun' },
    { key: 'dulces', icon: '🍬', style: 'c-sweet' },
    { key: 'plaza', icon: '🏛', style: 'c-place' },
    { key: 'albercas', icon: '🏊', style: 'c-water' },
    { key: 'mercados', icon: '🛍', style: 'c-market' },
    { key: 'panaderias', icon: '🍞', style: 'c-eat' },
    { key: 'museo', icon: '🏛️', style: 'c-museum' },
    { key: 'pizzeria', icon: '🍕', style: 'c-eat' },
    { key: 'historia', icon: '📜', style: 'c-place' }
  ];

  constructor(
    private dataService: DataService, 
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loadData();
    this.dataService.currentLang$.subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.texts = this.dataService.getTexts();
  }

  async openModal(key: string) {
    const itemData = this.dataService.getItemData(key);
    if (itemData) {
      const modal = await this.modalCtrl.create({
        component: DetailModalComponent,
        componentProps: { data: itemData }
      });
      await modal.present();
    }
  }

  toggleLang() {
    const current = this.dataService.getLanguage();
    const next = current === 'es' ? 'en' : 'es';
    this.dataService.setLanguage(next);
  }

  toggleDark() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }
}