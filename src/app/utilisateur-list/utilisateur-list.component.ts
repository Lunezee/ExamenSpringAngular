import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {
[x: string]: any;
  utilisateurs: Utilisateur[] = [];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getUtilisateurs();
  }

  getUtilisateurs(): void {
    this.utilisateurService.getAllUtilisateurs().subscribe((data: Utilisateur[]) => {
      this.utilisateurs = data;
    });
  }
  editUtilisateur(utilisateur: Utilisateur): void {
    this['router'].navigate(['/editutilisateurs', utilisateur.id]);
  }


  deleteUtilisateur(id: number): void {
    this.utilisateurService.deleteUtilisateur(id).subscribe(() => {
      this.getUtilisateurs();
    });
  }
}

