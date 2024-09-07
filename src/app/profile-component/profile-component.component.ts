import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-component.component.html'
})
export class ProfileComponent implements OnInit {
  currentUser: Utilisateur | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }
}

