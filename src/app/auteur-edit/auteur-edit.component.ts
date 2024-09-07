import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuteurService } from '../auteur.service';
import { Auteur } from '../models/auteur';

@Component({
  selector: 'app-auteur-edit',
  templateUrl: './auteur-edit.component.html',
  styleUrls: ['./auteur-edit.component.css']
})
export class AuteurEditComponent implements OnInit {
  id!: number;
  auteur: Auteur = { id: 0, nom: '', dateNaissance: new Date(), nationalite: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auteurService: AuteurService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.auteurService.getAuteurById(this.id).subscribe(data => {  // Utilisation correcte de la méthode
      this.auteur = data;
    });
  }

  onSubmit() {
    this.auteurService.updateAuteur(this.id, this.auteur).subscribe(() => {
      console.log('Auteur mis à jour avec succès');
      this.router.navigate(['/listauteurs']);
    });
  }
  onCancel() {
    this.router.navigate(['/auteurs']);
  }
  
}
