import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre';
import { LivreService } from '../livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  livres: Livre[] = [];
sectionPath: any;

  constructor(private livreService: LivreService, private router: Router) {}

  ngOnInit(): void {
    this.getLivres();
  }

  private getLivres() {
    this.livreService.getLivresList().subscribe(data => {
      this.livres = data;
    });
  }

  updateLivre(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteLivre(id: number) {
    this.livreService.deleteLivre(id).subscribe(data => {
      console.log(data);
      this.getLivres();
    });
  }

  // livreDetails(id: number) {
  //   this.router.navigate(['livre-details', id]);
  // }
}
