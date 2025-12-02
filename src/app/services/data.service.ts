import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentLang = new BehaviorSubject<string>('es');
  public currentLang$ = this.currentLang.asObservable();

  // URL DE TU BACKEND PYTHON
  private apiUrl = 'http://localhost:3000/api';

  // Textos fijos de la interfaz
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

  constructor(private http: HttpClient) { }

  // --- LÓGICA DE IDIOMA ---
  setLanguage(lang: string) { this.currentLang.next(lang); }
  getLanguage() { return this.currentLang.value; }
  getTexts() { return this.uiTexts[this.currentLang.value]; }
  
  
  // --- CONEXIONES CON EL BACKEND (PYTHON) ---

  // 1. Para TAB 1: Obtener lista de lugares por categoría
  getPlacesByCategory(category: string) {
    return this.http.get<any[]>(`${this.apiUrl}/lugares/${category}`);
  }

  // 2. Para TAB 2 (MAPA): Obtener TODOS los lugares
  getAllPlaces() {
    return this.http.get<any[]>(`${this.apiUrl}/lugares`);
  }

  // 3. Para TAB 3: Obtener recomendaciones basadas en gustos
  getRecommendations(userInterests: string[]) {
    return this.http.post<any[]>(`${this.apiUrl}/recomendaciones`, { 
      intereses: userInterests 
    });
  }

  // 4. Para REGISTRO: Guardar nuevo usuario
  registerUser(datosUsuario: any) {
    return this.http.post(`${this.apiUrl}/registro`, datosUsuario);
  }

  // 5. Para LOGIN: Verificar credenciales
  loginUser(credenciales: any) {
    return this.http.post(`${this.apiUrl}/login`, credenciales);
  }

  // 6. Para GUARDAR COMENTARIOS
  addReview(placeId: string, review: any) {
    return this.http.post(`${this.apiUrl}/lugares/${placeId}/resena`, review);
  }

}