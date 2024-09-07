import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auteur } from '../models/auteur';
import { AuteurService } from '../auteur.service';

@Component({
  selector: 'app-auteur-create',
  templateUrl: './auteur-create.component.html',
  styleUrls: ['./auteur-create.component.css']
})
export class AuteurCreateComponent implements OnInit {
  auteur: Auteur = {
    nom: '',
    dateNaissance: new Date(),
    nationalite: '',
    id: 0
  };

  constructor(private auteurService: AuteurService, private router: Router) {}

  ngOnInit(): void {}

  saveAuteur(): void {
    this.auteurService.createAuteur(this.auteur).subscribe(
      data => {
        console.log(data);
        this.goToAuteurList();
      },
      error => console.log(error)
    );
  }

  goToAuteurList(): void {
    this.router.navigate(['/listauteurs']);
  }

  onSubmit(): void {
    this.saveAuteur();
  }
}
