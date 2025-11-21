import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
// Importamos el componente del modal para usarlo en la lógica (openModal)
import { DetailModalComponent } from '../components/detail-modal/detail-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  // Quitamos DetailModalComponent de aquí para que no salga la advertencia amarilla
  imports: [IonicModule, CommonModule, FormsModule], 
})
export class Tab1Page implements OnInit {

  // ESTA VARIABLE ES LA QUE FALTABA PARA EL MODO OSCURO
  darkMode: boolean = false;

  // Textos dinámicos del idioma
  texts: any = {};

  // Lista de categorías para los cuadritos del menú
  catList = [
    { key: 'taquerias',    icon: '🌮', style: 'cat-card' },
    { key: 'restaurantes', icon: '🍽️', style: 'cat-card' },
    { key: 'cascadas',     icon: '🌊', style: 'cat-card' },
    { key: 'presas',       icon: '🛶', style: 'cat-card' },
    { key: 'cabanas',      icon: '🏡', style: 'cat-card' },
    { key: 'hoteles',      icon: '🏨', style: 'cat-card' },
    { key: 'turismo',      icon: '📸', style: 'cat-card' },
    { key: 'dulces',       icon: '🍬', style: 'cat-card' },
    { key: 'plaza',        icon: '⛪', style: 'cat-card' },
    { key: 'albercas',     icon: '🏊', style: 'cat-card' },
    { key: 'mercados',     icon: '🧺', style: 'cat-card' },
    { key: 'panaderias',   icon: '🥐', style: 'cat-card' },
    { key: 'museo',        icon: '🏛️', style: 'cat-card' },
    { key: 'pizzeria',     icon: '🍕', style: 'cat-card' },
    { key: 'historia',     icon: '📜', style: 'cat-card' }
  ];

  constructor(
    private dataService: DataService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    // Nos suscribimos a los cambios de idioma
    this.dataService.currentLang$.subscribe(() => {
       this.texts = this.dataService.getTexts();
    });
  }

  // Función para abrir el modal
  async openModal(key: string) {
    const categoryData = this.dataService.getItemData(key); 
    
    const modal = await this.modalCtrl.create({
      component: DetailModalComponent,
      componentProps: {
        data: categoryData
      }
    });
    await modal.present();
  }
  
  // Función para cambiar idioma
  toggleLang() {
    const current = this.dataService.getLanguage();
    this.dataService.setLanguage(current === 'es' ? 'en' : 'es');
  }
  
  // Función para el modo oscuro (CORREGIDA)
  toggleDark() {
    this.darkMode = !this.darkMode; 
    document.body.classList.toggle('dark', this.darkMode);
  }
}