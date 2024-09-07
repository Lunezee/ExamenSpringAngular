import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetourService } from '../retour.service';
import { Retour } from '../models/retour';

@Component({
  selector: 'app-retour-create',
  templateUrl: './retour-create.component.html',
  styleUrls: ['./retour-create.component.css']
})
export class RetourCreateComponent implements OnInit {
[x: string]: any;
  retour: Retour = {
    id: undefined,
    descriptionLivre: '',
    nomComplet: '',
    dateRetour: new Date()
  };

  constructor(private retourService: RetourService, private router: Router) {}

  ngOnInit(): void {}

  saveRetour(): void {
    this.retourService.createRetour(this.retour).subscribe(data => {
      console.log(data);
      this.router.navigate(['/emprunts']);
    });
   
  }
  onCancel() {
    this.router.navigate(['/emprunts']); // Redirection vers la liste des livres en cas d'annulation
  }
}
