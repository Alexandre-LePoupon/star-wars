import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecherchePersoComponent } from './recherche-perso/recherche-perso.component';
import { DetailPersoComponent } from './detail-perso/detail-perso.component';
import { SwapiService } from "app/services/swapi.service";
import { RouterModule, Routes } from "@angular/router";
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  {path: "accueil", component: RecherchePersoComponent},
  {path: "personnage/:id", component: DetailPersoComponent},
  {path: "**", redirectTo: "/accueil"}
];

@NgModule({
  declarations: [
    AppComponent,
    RecherchePersoComponent,
    DetailPersoComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
