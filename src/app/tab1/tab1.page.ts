import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController, ActionSheetController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ListModalComponent } from '../components/list-modal/list-modal.component';
import { Lugar } from '../interfaces/lugar';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ListModalComponent] 
})
export class Tab1Page implements OnInit {
  
  texts: any = {};
  darkMode = false; 
  
  // Recursos estáticos
  readonly logoPrincipal = 'assets/logo.jpeg';
  readonly botonDia = 'assets/logo-dia.jpg'; 
  readonly botonNoche = 'assets/logo-noche.jpg';

  // Categorías disponibles en la plataforma
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
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.loadData();
    this.dataService.currentLang$.subscribe(() => this.loadData());
  }

  loadData() {
  }

  openModal(key: string) {
    this.dataService.getPlacesByCategory(key).subscribe({
      next: (data: Lugar[]) => {
        this.presentListModal(key, data);
      },
      error: (err) => {
        console.error('Error al obtener datos:', err);
      }
    });
  }

  async presentListModal(category: string, items: Lugar[]) {
    const modal = await this.modalCtrl.create({
      component: ListModalComponent,
      componentProps: { 
        categoryTitle: category.toUpperCase(), 
        items: items 
      }
    });
    await modal.present();
  }

  async showLanguageMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecciona un idioma',
      buttons: [
        { text: 'Español 🇲🇽', handler: () => { this.dataService.setLanguage('es'); } },
        { text: 'English 🇺🇸', handler: () => { this.dataService.setLanguage('en'); } },
        { text: 'Cancelar', role: 'cancel' }
      ]
    });
    await actionSheet.present();
  }

  toggleDark() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }
}