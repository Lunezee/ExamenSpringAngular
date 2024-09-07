import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpruntService } from '../emprunt.service';
import { Emprunt } from '../models/emprunt';

@Component({
  selector: 'app-emprunt-create',
  templateUrl: './emprunt-create.component.html',
  styleUrls: ['./emprunt-create.component.css']
})
export class EmpruntCreateComponent implements OnInit {
  emprunt: Emprunt = {
    id: undefined,
    nomUtilisateur: '',
    titreLivre: '',
    dateEmprunt: new Date(),
    dateRetour: null
  };

  constructor(private empruntService: EmpruntService, private router: Router) {}

  ngOnInit(): void {}

  saveEmprunt() {
    this.empruntService.createEmprunt(this.emprunt).subscribe(
      data => {
        console.log('Emprunt créé avec succès', data);
        this.router.navigate(['/emprunts']);
      },
      error => {
        console.error('Erreur lors de la création de l\'emprunt', error);
      }
    );
  }

  onCancel() {
    this.router.navigate(['/listemprunts']);
  }
}
