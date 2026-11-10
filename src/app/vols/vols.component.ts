import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-vols',
  imports: [DatePipe, RouterLink],
  templateUrl: './vols.component.html',
})
export class VolsComponent {
  vols: Vol[];
  private volService = inject(VolService);
  authService = inject(Auth);

  constructor() {
    this.vols = this.volService.listeVols();
  }

  supprimerVol(v: Vol) {
    const conf = confirm('Êtes-vous sûr de vouloir supprimer ce vol ?');
    if (conf) {
      this.volService.supprimerVol(v);
    }
  }
}
