import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentLang = new BehaviorSubject<string>('es');
  public currentLang$ = this.currentLang.asObservable();

  // AHORA CADA CATEGORÍA ES UNA LISTA [] DE LUGARES
  private content: any = {
    es: {
      heroTitle: "Descubre la magia de Calvillo",
      heroDesc: "Guayaba, arte, historia y sabor en un solo lugar.",
      searchPlaceholder: "Busca un lugar...",
      
      // --- CATEGORÍA: TAQUERÍAS (Lista) ---
      taquerias: [
        {
          id: 1,
          title: "Taquería El Tarasco",
          desc: "Los mejores al pastor del centro.",
          img: "https://lh3.googleusercontent.com/p/AF1QipN9_Xl9_Xl9_Xl9_Xl9_Xl9_Xl9_Xl9_Xl9/s1360-w1360-h1020",
          text: "Famosos por sus tacos al pastor y gringas. Un clásico nocturno.",
          extra: "Blvd. Rodolfo Landeros. Abierto hasta tarde.",
          reviews: []
        },
        {
          id: 2,
          title: "Tacos Don Juan",
          desc: "Tacos de cabeza y barbacoa.",
          img: "https://source.unsplash.com/800x600/?tacos,meat",
          text: "Tradicionales tacos mañaneros. La salsa verde es imperdible.",
          extra: "Mercado Gastronómico, Local 4.",
          reviews: []
        },
        {
          id: 3,
          title: "Taquería La Flama",
          desc: "Asada y chorizo estilo Calvillo.",
          img: "https://source.unsplash.com/800x600/?grill,tacos",
          text: "El sabor del carbón en cada taco. Prueba las quesadillas.",
          extra: "Calle Juárez #500.",
          reviews: []
        }
      ],

      // --- CATEGORÍA: HOTELES (Lista) ---
      hoteles: [
        {
          id: 4,
          title: "Hotel Doña Manuela",
          desc: "Boutique en el corazón del pueblo.",
          img: "https://media-cdn.tripadvisor.com/media/photo-s/0f/59/3a/8a/fachada.jpg",
          text: "Habitaciones coloniales con todas las comodidades modernas.",
          extra: "Incluye desayuno continental.",
          reviews: []
        },
        {
          id: 5,
          title: "Cabañas Sierra Escondida",
          desc: "Naturaleza y desconexión total.",
          img: "https://source.unsplash.com/800x600/?cabin,forest",
          text: "Escápate a la sierra fría de Calvillo. Ideal para fogatas.",
          extra: "A 20 min del centro.",
          reviews: []
        }
      ],

      // --- AGREGA AQUÍ LAS DEMÁS CATEGORÍAS COMO LISTAS VACÍAS O CON DATOS ---
      restaurantes: [],
      cascadas: [],
      dulces: [],
      // ... etc
    },
    en: {
      heroTitle: "Discover Calvillo",
      // ... (Configura el inglés igual si lo necesitas)
    }
  };

  constructor() { }

  setLanguage(lang: string) { this.currentLang.next(lang); }
  getLanguage() { return this.currentLang.value; }
  getTexts() { return this.content[this.currentLang.value]; }
  
  // AHORA ESTO DEVUELVE UNA LISTA, NO UN SOLO OBJETO
  getCategoryList(key: string) {
    return this.content[this.currentLang.value][key] || [];
  }
}