import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-utilisateur-edit',
  templateUrl: './utilisateur-edit.component.html',
  styleUrls: ['./utilisateur-edit.component.css']
})
export class UtilisateurEditComponent implements OnInit {
  utilisateur: Utilisateur = new Utilisateur();
  id!: number;

  constructor(private utilisateurService: UtilisateurService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.utilisateurService.getUtilisateurById(this.id).subscribe((data: Utilisateur) => {
      this.utilisateur = data;
    });
  }

  onSubmit(): void {
    this.utilisateurService.updateUtilisateur(this.id, this.utilisateur).subscribe(() => {
      this.router.navigate(['/utilisateurs']);
    });
  }
}
