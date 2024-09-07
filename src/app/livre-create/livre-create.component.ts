import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LivreService } from '../livre.service';
import { Livre } from '../models/livre';

@Component({
  selector: 'app-livre-create',
  templateUrl: './livre-create.component.html',
  styleUrls: ['./livre-create.component.css']
})
export class LivreCreateComponent {
  livre: Livre = new Livre(); // Initialisation d'un nouveau livre

  constructor(private livreService: LivreService, private router: Router) {}

  onSave() {
    this.livreService.createLivre(this.livre).subscribe(() => {
      this.router.navigate(['/livres']); // Redirection vers la liste des livres après la sauvegarde
    });
  }

  onCancel() {
    this.router.navigate(['/livres']); // Redirection vers la liste des livres en cas d'annulation
  }
}
