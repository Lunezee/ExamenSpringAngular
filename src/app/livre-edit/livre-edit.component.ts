import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../livre.service';
import { Livre } from '../models/livre';

@Component({
  selector: 'app-livre-edit',
  templateUrl: './livre-edit.component.html',
  styleUrls: ['./livre-edit.component.css']
})
export class LivreEditComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
  livre: Livre = new Livre();
  id!: number;
livreForm: any;

  constructor(
    private route: ActivatedRoute,
    private livreService: LivreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.livreService.getLivreById(this.id).subscribe((data) => {
      this.livre = data;
    });
  }

  onSave() {
    this.livreService.updateLivre(this.id, this.livre).subscribe(() => {
      this.router.navigate(['/listlivres']); // Redirection vers la liste des livres après la sauvegarde
    });
  }

  onCancel() {
    this.router.navigate(['/listlivres']); // Redirection vers la liste des livres en cas d'annulation
  }
}
