import { Component, OnInit } from '@angular/core';
import { EmpruntService } from '../emprunt.service';
import { Emprunt } from '../models/emprunt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprunt-list',
  templateUrl: './emprunt-list.component.html',
  styleUrls: ['./emprunt-list.component.css']
})
export class EmpruntListComponent implements OnInit {
  emprunts: Emprunt[] = [];

  constructor(private empruntService: EmpruntService, private router: Router) {}

  ngOnInit(): void {
    this.getEmprunts();
  }

  getEmprunts(): void {
    this.empruntService['getEmprunts']().subscribe((data: Emprunt[]) => {
      this.emprunts = data;
    });
  }

  editEmprunt(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['editemprunts', id]);
    }
  }

  deleteEmprunt(id: number | undefined): void {
    if (id !== undefined) {
      this.empruntService.deleteEmprunt(id).subscribe(() => this.getEmprunts());
    }
  }
}
