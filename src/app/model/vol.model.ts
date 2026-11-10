import { TypeVol } from './type-vol.model';

export class Vol {
  idVol!: number;
  numeroVol!: string;
  compagnie!: string;
  destination!: string;
  prixBillet!: number;
  dateDepart!: Date;
  type!: TypeVol;
}
