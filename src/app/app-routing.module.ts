import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { AuteurListComponent } from './auteur-list/auteur-list.component';
import { LivreComponent } from './livre/livre.component';
import { LivreCreateComponent } from './livre-create/livre-create.component';
import { EmpruntCreateComponent } from './emprunt-create/emprunt-create.component';
import { EmpruntListComponent } from './emprunt-list/emprunt-list.component';
import { AuteurCreateComponent } from './auteur-create/auteur-create.component';
import { AuteurEditComponent } from './auteur-edit/auteur-edit.component';
import { AuteurComponent } from './auteur/auteur.component';
import { LivreEditComponent } from './livre-edit/livre-edit.component';
import { LivreListComponent } from './livre-list/livre-list.component';
import { UtilisateurCreateComponent } from './utilisateur-create/utilisateur-create.component';
import { UtilisateurEditComponent } from './utilisateur-edit/utilisateur-edit.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';
import { RetourCreateComponent } from './retour-create/retour-create.component';
import { RetourEditComponent } from './retour-edit/retour-edit.component';
import { RetourListComponent } from './retour-list/retour-list.component';
import { EmpruntEditComponent } from './emprunt-edit/emprunt-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'emprunts', component: EmpruntComponent },
  { path: 'livres', component: LivreComponent },
  { path: 'auteurs', component: AuteurComponent },
  { path: 'utilisateurs', component: UtilisateurComponent },
  { path: 'addauteurs', component: AuteurCreateComponent },
  { path: 'editauteurs/:id', component: AuteurEditComponent },
  { path: 'listauteurs', component: AuteurListComponent },
  { path: 'addlivres', component: LivreCreateComponent },
  { path: 'editlivres/:id', component: LivreEditComponent },
  { path: 'listlivres', component: LivreListComponent },
  { path: 'addemprunts', component: EmpruntCreateComponent },
  { path: 'listemprunts', component: EmpruntListComponent },
  { path: 'editemprunts/:id', component: EmpruntEditComponent },
  { path: 'listutilisateurs', component: UtilisateurListComponent },
  { path: 'addutilisateurs', component: UtilisateurCreateComponent },
  { path: 'editutilisateurs/:id', component: UtilisateurEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addretours', component: RetourCreateComponent },
  { path: 'editretours/:id', component: RetourEditComponent },
  { path: 'listretours', component: RetourListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
