import { Routes } from '@angular/router';
import { VolsComponent } from './vols/vols.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParNomKeyupComponent } from './recherche-par-nom-keyup/recherche-par-nom-keyup.component';
import { UpdateVolComponent } from './update-vol/update-vol.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { volGuard } from './guard-vol/vol.guard';

export const routes: Routes = [
  { path: 'vols', component: VolsComponent },
  { path: 'add-vol', component: AddVolComponent, canActivate: [volGuard] },
  { path: 'rechercheParType', component: RechercheParTypeComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'rechercheParNomKeyup', component: RechercheParNomKeyupComponent },
  { path: 'update-vol/:id', component: UpdateVolComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'vols', pathMatch: 'full' },
];
