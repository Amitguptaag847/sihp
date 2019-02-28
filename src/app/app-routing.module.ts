import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WastageComponent } from './wastage/wastage.component';
import { MaterialsComponent } from './materials/materials.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '', redirectTo: '/wastage', pathMatch: 'full' },
  { path: 'wastage', component: WastageComponent },
  { path: 'materials', component: MaterialsComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
