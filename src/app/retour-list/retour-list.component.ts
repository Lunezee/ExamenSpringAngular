import { Component, OnInit } from '@angular/core';
import { RetourService } from '../retour.service';
import { Retour } from '../models/retour';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retour-list',
  templateUrl: './retour-list.component.html',
  styleUrls: ['./retour-list.component.css']
})
export class RetourListComponent implements OnInit {

  retours: Retour[] = [];

  constructor(private retourService: RetourService, private router: Router) {}

  ngOnInit(): void {
    this.getRetours();
  }

  // Récupération de la liste des retours
  private getRetours(): void {
    this.retourService.getRetours().subscribe(data => {
      this.retours = data;
    });
  }

  // Redirection vers la page d'édition d'un retour
  editRetour(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/editretours', id]);
    }
  }

  // Suppression d'un retour
  deleteRetour(id: number | undefined): void {
    if (id) {
      this.retourService.deleteRetour(id).subscribe(() => {
        this.retours = this.retours.filter(retour => retour.id !== id);  // Mise à jour de la liste locale après suppression
      }, error => {
        console.log('Erreur lors de la suppression du retour', error);
      });
    }
  }
}
