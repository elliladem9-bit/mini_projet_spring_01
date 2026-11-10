import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vol } from '../model/vol.model';
import { TypeVol } from '../model/type-vol.model';

@Injectable({ providedIn: 'root' })
export class VolService {
  types: TypeVol[];
  vols: Vol[];

  constructor() {
    this.types = [
      { idType: 1, nomType: 'Vol direct', descriptionType: 'Sans escale' },
      { idType: 2, nomType: 'Vol avec escale', descriptionType: 'Une ou plusieurs escales' },
    ];
    this.vols = [
      { idVol: 1, numeroVol: 'TU 714', compagnie: 'Tunisair', destination: 'Paris',
        prixBillet: 850, dateDepart: new Date('2026-11-10'), type: this.types[0] },
      { idVol: 2, numeroVol: 'TU 332', compagnie: 'Tunisair', destination: 'Istanbul',
        prixBillet: 720, dateDepart: new Date('2026-11-18'), type: this.types[1] },
      { idVol: 3, numeroVol: 'NO 512', compagnie: 'Nouvelair', destination: 'Rome',
        prixBillet: 640, dateDepart: new Date('2026-12-02'), type: this.types[0] },
    ];
  }

  listeVols(): Vol[] {
    return this.vols;
  }

  listeTypes(): TypeVol[] {
    return this.types;
  }

  // Recherche par type de vol
  rechercherParType(idType: number): Observable<Vol[]> {
    return of(this.vols.filter((v) => v.type.idType == idType));
  }

  // Recherche par nom (destination)
  rechercherParNom(nom: string): Observable<Vol[]> {
    return of(this.vols.filter((v) => v.destination.toLowerCase().includes(nom.toLowerCase())));
  }

  consulterType(id: number): TypeVol {
    return this.types.find((t) => t.idType == id)!;
  }

  ajouterVol(vol: Vol) {
    // si aucun id n'est saisi, on en génère un automatiquement
    if (!vol.idVol) {
      vol.idVol = Math.max(0, ...this.vols.map((v) => v.idVol)) + 1;
    }
    this.vols.push(vol);
  }

  supprimerVol(vol: Vol) {
    const index = this.vols.indexOf(vol, 0);
    if (index > -1) {
      this.vols.splice(index, 1);
    }
  }

  consulterVol(id: number): Vol {
    return this.vols.find((v) => v.idVol === id)!;
  }

  updateVol(v: Vol) {
    const index = this.vols.findIndex((x) => x.idVol === v.idVol);
    if (index > -1) {
      this.vols[index] = v;
    }
  }
}
