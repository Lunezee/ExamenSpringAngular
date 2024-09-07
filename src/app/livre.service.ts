import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from './models/livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  getLivres() {
    throw new Error('Method not implemented.');
  }
  private baseURL = 'http://localhost:5200/api/livres';

  constructor(private httpClient: HttpClient) {}

  getLivresList(): Observable<Livre[]> {
    return this.httpClient.get<Livre[]>(`${this.baseURL}/list`);
  }

  createLivre(livre: Livre): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/add`, livre);
  }

  getLivreById(id: number): Observable<Livre> {
    return this.httpClient.get<Livre>(`${this.baseURL}/${id}`);
  }

  updateLivre(id: number, livre: Livre): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, livre);
  }

  deleteLivre(id: number | undefined): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
