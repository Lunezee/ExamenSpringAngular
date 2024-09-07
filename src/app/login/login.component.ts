import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  utilisateur: Utilisateur = new Utilisateur();
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.utilisateur).subscribe(
      (data: any) => {
        // Sauvegarde les informations de l'utilisateur connecté
        localStorage.setItem('currentUser', JSON.stringify(data));
        // Redirige vers la page d'accueil
        this.router.navigate(['/home']);
      },
      error => {
        // Affiche un message d'erreur en cas de mauvaise connexion
        this.errorMessage = 'Identifiants incorrects, veuillez réessayer.';
      }
    );
  }
}