import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auteur } from './models/auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {
  private baseUrl = 'http://localhost:5200/api/auteurs';

  constructor(private http: HttpClient) { }

  getAuteurs(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(`${this.baseUrl}/list`);
  }

  getAuteurById(id: number): Observable<Auteur> {  // Assurez-vous que cette méthode existe
    return this.http.get<Auteur>(`${this.baseUrl}/${id}`);
  }

  createAuteur(auteur: Auteur): Observable<Auteur> {
    return this.http.post<Auteur>(`${this.baseUrl}/add`, auteur);
  }

  updateAuteur(id: number, auteur: Auteur): Observable<Auteur> {
    return this.http.put<Auteur>(`${this.baseUrl}/update/${id}`, auteur);
  }

  deleteAuteur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
