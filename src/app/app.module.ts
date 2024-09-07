import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Importation de FormsModule pour ngModel
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreListComponent } from './livre-list/livre-list.component';
import { LivreCreateComponent } from './livre-create/livre-create.component';
import { LivreEditComponent } from './livre-edit/livre-edit.component';
import { AuteurListComponent } from './auteur-list/auteur-list.component';
import { AuteurCreateComponent } from './auteur-create/auteur-create.component';
import { AuteurEditComponent } from './auteur-edit/auteur-edit.component';
import { EmpruntListComponent } from './emprunt-list/emprunt-list.component';
import { EmpruntCreateComponent } from './emprunt-create/emprunt-create.component';
import { HomeComponent } from './home/home.component';
import { LivreComponent } from './livre/livre.component';
import { AuteurComponent } from './auteur/auteur.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpruntEditComponent } from './emprunt-edit/emprunt-edit.component';
import { LoginComponent } from './login/login.component';
import { UtilisateurCreateComponent } from './utilisateur-create/utilisateur-create.component';
import { ProfileComponent } from './profile-component/profile-component.component';
import { UtilisateurEditComponent } from './utilisateur-edit/utilisateur-edit.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RetourCreateComponent } from './retour-create/retour-create.component';
import { RetourEditComponent } from './retour-edit/retour-edit.component';
import { RetourListComponent } from './retour-list/retour-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreListComponent,
    LivreCreateComponent,
    LivreEditComponent,
    AuteurListComponent,
    AuteurCreateComponent,
    AuteurEditComponent,
    EmpruntListComponent,
    EmpruntCreateComponent,
    HomeComponent,
    LivreComponent,
    AuteurComponent,
    EmpruntComponent,
    EmpruntEditComponent,
    LoginComponent,
    UtilisateurCreateComponent,
    ProfileComponent,
    UtilisateurEditComponent,
    UtilisateurListComponent,
    UtilisateurComponent,
    RetourCreateComponent,
    RetourEditComponent,
    RetourListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
