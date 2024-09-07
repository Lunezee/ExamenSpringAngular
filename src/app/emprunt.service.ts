import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprunt } from './models/emprunt'; // Assurez-vous que le modèle 'Emprunt' est correctement défini

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {

  private apiUrl = 'http://localhost:5200/api/emprunts'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  // Méthode pour créer un nouvel emprunt
  createEmprunt(emprunt: Emprunt): Observable<Emprunt> {
    return this.http.post<Emprunt>(`${this.apiUrl}/add`, emprunt);
  }

  // Méthode pour obtenir un emprunt par ID
  getEmpruntById(id: number): Observable<Emprunt> {
    return this.http.get<Emprunt>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour obtenir tous les emprunts
  getEmprunts(): Observable<Emprunt[]> {
    return this.http.get<Emprunt[]>(`${this.apiUrl}/list`);
  }

  // Méthode pour mettre à jour un emprunt par ID
  updateEmprunt(id: number, emprunt: Emprunt): Observable<Emprunt> {
    return this.http.put<Emprunt>(`${this.apiUrl}/update/${id}`, emprunt);
  }

  // Méthode pour supprimer un emprunt par ID
  deleteEmprunt(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
