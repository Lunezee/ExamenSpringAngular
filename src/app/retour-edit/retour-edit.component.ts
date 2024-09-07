import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetourService } from '../retour.service';
import { Retour } from '../models/retour';

@Component({
  selector: 'app-retour-edit',
  templateUrl: './retour-edit.component.html',
  styleUrls: ['./retour-edit.component.css']
})
export class RetourEditComponent implements OnInit {
  id!: number;
  retour: Retour = {
    id: undefined,
    descriptionLivre: '',
    nomComplet: '',
    dateRetour: new Date()
  };

  constructor(private retourService: RetourService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.retourService.getRetourById(this.id).subscribe((data: Retour) => {
      this.retour = data;
    });
  }

  updateRetour(): void {
    this.retourService.updateRetour(this.id, this.retour).subscribe(data => {
      console.log(data);
      this.router.navigate(['/listretours']);
    });
  }

  onCancel() {
    this.router.navigate(['/listretours']); // Redirection vers la liste des retours en cas d'annulation
  }

  onSubmit() {
    this.updateRetour();
  }
}
