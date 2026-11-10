import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vol } from '../model/vol.model';
import { TypeVol } from '../model/type-vol.model';
import { VolService } from '../services/vol.service';

@Component({
  selector: 'app-update-vol',
  imports: [FormsModule, DatePipe],
  templateUrl: './update-vol.component.html',
})
export class UpdateVolComponent implements OnInit {
  currentVol = new Vol();
  types: TypeVol[];
  updatedIdType = 1;
  private activatedRoute = inject(ActivatedRoute);
  private volService = inject(VolService);
  private router = inject(Router);

  constructor() {
    this.types = this.volService.listeTypes();
  }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.currentVol = this.volService.consulterVol(id);
    this.updatedIdType = this.currentVol.type.idType;
  }

  updateVol() {
    this.currentVol.type = this.volService.consulterType(this.updatedIdType);
    this.volService.updateVol(this.currentVol);
    this.router.navigate(['vols']);
  }
}
