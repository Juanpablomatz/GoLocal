import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lugar } from '../interfaces/lugar';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentLang = new BehaviorSubject<string>('es');
  public currentLang$ = this.currentLang.asObservable();

  // URL del API Backend
  private readonly apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  /**
   * Gestiona el cambio de idioma de la aplicación
   * @param lang Código del idioma ('es' | 'en')
   */
  setLanguage(lang: string): void {
    this.currentLang.next(lang);
  }

  getLanguage(): string {
    return this.currentLang.value;
  }

  /* --- MÉTODOS API --- */

  /**
   * Obtiene la lista de lugares filtrada por categoría
   */
  getPlacesByCategory(category: string): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(`${this.apiUrl}/lugares/${category}`);
  }

  /**
   * Obtiene todos los lugares registrados sen la base de datos
   */
  getAllPlaces(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(`${this.apiUrl}/lugares`);
  }

  /**
   * Envía los intereses del usuario para obtener recomendaciones personalizadas
   */
  getRecommendations(userInterests: string[]): Observable<Lugar[]> {
    return this.http.post<Lugar[]>(`${this.apiUrl}/recomendaciones`, { 
      intereses: userInterests 
    });
  }

  /**
   * Agrega una reseña a un lugar específico
   */
  addReview(placeId: string, review: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/lugares/${placeId}/resena`, review);
  }

  // Métodos de autenticación
  registerUser(datosUsuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, datosUsuario);
  }

  loginUser(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credenciales);
  }
}