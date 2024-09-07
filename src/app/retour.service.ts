import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retour } from './models/retour';

@Injectable({
  providedIn: 'root'
})
export class RetourService {
  private baseURL = 'http://localhost:5200/api/retours';

  constructor(private httpClient: HttpClient) {}

  getRetours(): Observable<Retour[]> {
    return this.httpClient.get<Retour[]>(`${this.baseURL}/list`);
  }

  getRetourById(id: number): Observable<Retour> {
    return this.httpClient.get<Retour>(`${this.baseURL}/${id}`);
  }

  createRetour(retour: Retour): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/add`, retour);
  }

  updateRetour(id: number, retour: Retour): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, retour);
  }

  deleteRetour(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
