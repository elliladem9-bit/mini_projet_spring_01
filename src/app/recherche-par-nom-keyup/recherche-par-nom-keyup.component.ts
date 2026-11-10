import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';

// Recherche par destination en utilisant l'événement keyup
@Component({
  selector: 'app-recherche-par-nom-keyup',
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-nom-keyup.component.html',
})
export class RechercheParNomKeyupComponent implements OnInit {
  vols: Vol[] = [];
  allVols: Vol[] = [];
  private volService = inject(VolService);

  ngOnInit(): void {
    this.allVols = this.volService.listeVols();
    this.vols = this.allVols;
  }

  onKeyUp(filterText: string) {
    this.vols = this.allVols.filter((item) =>
      item.destination.toLowerCase().includes(filterText.toLowerCase()),
    );
  }
}
