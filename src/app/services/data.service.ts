import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <--- IMPORTANTE: Para hablar con Python
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentLang = new BehaviorSubject<string>('es');
  public currentLang$ = this.currentLang.asObservable();

  // 1. URL DE TU BACKEND PYTHON
  // Asegúrate de que tu servidor Python esté corriendo (python app.py)
  private apiUrl = 'http://localhost:3000/api';

  // 2. TEXTOS FIJOS DE LA INTERFAZ (Solo títulos y descripciones)
  // Ya no ponemos la lista de lugares aquí porque ahora vienen de Mongo
  private uiTexts: any = {
    es: {
      heroTitle: "Descubre la magia de Calvillo",
      heroDesc: "Guayaba, arte, historia y sabor en un solo lugar.",
      searchPlaceholder: "Busca un lugar...",
    },
    en: {
      heroTitle: "Discover Calvillo",
      heroDesc: "Guava, art, history and flavor in one place.",
      searchPlaceholder: "Search for a place...",
    }
  };

  // Inyectamos HttpClient para poder hacer peticiones
  constructor(private http: HttpClient) { }

  // --- LÓGICA DE IDIOMA ---
  setLanguage(lang: string) { this.currentLang.next(lang); }
  getLanguage() { return this.currentLang.value; }
  
  // Devuelve solo los textos de la interfaz (Hero, Títulos)
  getTexts() { return this.uiTexts[this.currentLang.value]; }
  
  
  // --- CONEXIONES CON EL BACKEND (PYTHON) ---

  // A. Para TAB 1: Obtener lista de lugares por categoría
  // Ejemplo: Llama a http://localhost:3000/api/lugares/taquerias
  getPlacesByCategory(category: string) {
    return this.http.get<any[]>(`${this.apiUrl}/lugares/${category}`);
  }

  // B. Para TAB 3: Obtener recomendaciones basadas en gustos
  // Ejemplo: Envía ["comida", "naturaleza"] a Python y recibe la ruta sugerida
  getRecommendations(userInterests: string[]) {
    return this.http.post<any[]>(`${this.apiUrl}/recomendaciones`, { 
      intereses: userInterests 
    });
  }

}