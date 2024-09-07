export class Emprunt {
  id?: number;
  nomUtilisateur!: string;
  titreLivre!: string;
  dateEmprunt!: Date;
  dateRetour!: Date | null;
}
