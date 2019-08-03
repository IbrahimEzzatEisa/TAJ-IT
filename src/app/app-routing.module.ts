import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemsComponent } from './items/items.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full'} ,
  {path: 'home' , component: HomeComponent},
  {path: 'navbar' , component: NavbarComponent },
  {path: 'items' , component: ItemsComponent},
  { path: 'item' , component: ItemComponent},
  {path: 'item-list' , component: ItemListComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
