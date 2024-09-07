import { Component, OnInit } from '@angular/core';
import { LivreService } from '../livre.service';
import { Router } from '@angular/router';
import { Livre } from '../models/livre';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-livre-list',
  templateUrl: './livre-list.component.html',
  styleUrls: ['./livre-list.component.css']
})
export class LivreListComponent implements OnInit {
  livres: Livre[] = [];

  constructor(private livreService: LivreService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.getLivres();
  }

  private getLivres() {
    this.livreService.getLivresList().subscribe(data => {
      this.livres = data;
    });
  }

  updateLivre(id: number) {
    this.router.navigate(['editlivres', id]);
  }

  deleteLivre(id: number) {
    this.livreService.deleteLivre(id).subscribe(data => {
      this.getLivres();
    });
  }

  emprunterLivre(livreId: number) {
    const utilisateur = this.authService.getCurrentUser();
    this.router.navigate(['/addemprunts'], { queryParams: { livreId: livreId, utilisateurId: utilisateur?.id } });
  }

  rendreLivre(livreId: number) {
    this.router.navigate(['/addretours'], { queryParams: { livreId: livreId } });
  }
}
