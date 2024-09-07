import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuteurService } from '../auteur.service';
import { Auteur } from '../models/auteur';

@Component({
  selector: 'app-auteur-list',
  templateUrl: './auteur-list.component.html',
  styleUrls: ['./auteur-list.component.css']
})
export class AuteurListComponent implements OnInit {
  auteurs: Auteur[] = [];

  constructor(private auteurService: AuteurService, private router: Router) {}

  ngOnInit(): void {
    this.getAuteurs();
  }

  private getAuteurs() {
    this.auteurService.getAuteurs().subscribe(data => {
      this.auteurs = data;
    });
  }

  updateAuteur(id: number) {
    this.router.navigate(['editauteurs', id]);
  }

  deleteAuteur(id: number) {
    this.auteurService.deleteAuteur(id).subscribe(
      data => {
        console.log('Auteur supprimé avec succès');
        this.getAuteurs(); // Actualiser la liste après suppression
      },
      error => console.error('Erreur lors de la suppression de l\'auteur', error)
    );
  }

  ajouterAuteur() {
    this.router.navigate(['addauteurs']);
  }
}
