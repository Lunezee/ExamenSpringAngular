import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-utilisateur-create',
  templateUrl: './utilisateur-create.component.html',
  styleUrls: ['./utilisateur-create.component.css']
})
export class UtilisateurCreateComponent {
  utilisateur: Utilisateur = new Utilisateur();

  constructor(private utilisateurService: UtilisateurService, private router: Router) { }

  onSubmit(): void {
    this.utilisateurService.createUtilisateur(this.utilisateur).subscribe(() => {
      this.router.navigate(['/utilisateurs']);
    });
  }
}
