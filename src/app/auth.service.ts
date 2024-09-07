import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5200/api/auth';

  constructor(private http: HttpClient) { }

  login(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.baseUrl}/login`, utilisateur);
  }

  register(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.baseUrl}/register`, utilisateur);
  }

  // Méthode pour obtenir l'utilisateur actuellement connecté
  getCurrentUser(): Utilisateur | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  // Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
