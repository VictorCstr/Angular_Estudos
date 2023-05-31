import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
