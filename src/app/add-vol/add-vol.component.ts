import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Vol } from '../model/vol.model';
import { TypeVol } from '../model/type-vol.model';
import { VolService } from '../services/vol.service';

@Component({
  selector: 'app-add-vol',
  imports: [FormsModule],
  templateUrl: './add-vol.component.html',
})
export class AddVolComponent {
  newVol = new Vol();
  types: TypeVol[];
  newIdType = 1;
  private volService = inject(VolService);
  private router = inject(Router);

  constructor() {
    this.types = this.volService.listeTypes();
  }

  addVol() {
    this.newVol.type = this.volService.consulterType(this.newIdType);
    this.volService.ajouterVol(this.newVol);
    this.router.navigate(['vols']);
  }
}
