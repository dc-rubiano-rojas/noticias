import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { NewComponent } from './components/new/new.component';
import { ComponentsModule } from './components/components.module';
import { CategoriaComponent } from './components/categoria/categoria.component';


const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'new/:titulo', component: NewComponent},
  {path: 'categoria/:category', component: CategoriaComponent},
  {path: '**', redirectTo: 'news', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ComponentsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
