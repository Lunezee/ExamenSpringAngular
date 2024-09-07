import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpruntService } from '../emprunt.service';
import { Emprunt } from '../models/emprunt';

@Component({
  selector: 'app-emprunt-edit',
  templateUrl: './emprunt-edit.component.html',
  styleUrls: ['./emprunt-edit.component.css']
})
export class EmpruntEditComponent implements OnInit {
  emprunt: Emprunt = new Emprunt();
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empruntService: EmpruntService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Récupère l'ID de l'URL
    this.empruntService.getEmpruntById(this.id).subscribe((data: Emprunt) => {
      this.emprunt = data;
    }, error => console.log(error));
  }

  updateEmprunt() {
    this.empruntService.updateEmprunt(this.id, this.emprunt).subscribe(data => {
      console.log(data);
      this.router.navigate(['/listemprunts']);
    }, error => console.log(error));
  }

  onCancel() {
    this.router.navigate(['/listemprunts']);
  }

  onSubmit() {
    this.updateEmprunt();
  }
}
