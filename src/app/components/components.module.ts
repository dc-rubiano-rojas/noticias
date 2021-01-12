import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { NewsComponent } from './news/news.component';
import { ContentComponent } from './content/content.component';
import { CategoriaComponent } from './categoria/categoria.component';



@NgModule({
  declarations: [
    NewComponent,
    NewsComponent,
    ContentComponent,
    CategoriaComponent
  ],
  exports: [
    NewComponent,
    NewsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
