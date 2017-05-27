import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SwapiService } from "app/services/swapi.service";
import { Personnage } from "app/models/personnage";

@Component({
  selector: 'app-recherche-perso',
  templateUrl: './recherche-perso.component.html',
  styleUrls: ['./recherche-perso.component.css']
})
export class RecherchePersoComponent implements OnInit {
  private sub: any;
  public recherche: String = "";
  public isRechercheOnce = false;
  public resultats: Personnage[] = [];
  public listePersonnage: Personnage[] = [];
  public pages: number = 0;
  public suivant: String= "";
  public precedent: String= "";
  public pageCourante: number = 1;
  public error: String = "";

  constructor(private swapiSvc: SwapiService) { }

  ngOnInit() {
    this.rechercher();
  }

  rechercher() {
      this.resultats = [];
      this.swapiSvc.recherchePersonnage(this.recherche, 1)
        .subscribe(
        ((recherche) => {
          this.pages = recherche.pages;
          this.pageCourante = recherche.page;
          this.resultats = recherche.personnages;
        }),
        (error) => {
          console.log("Erreur 2");
        });
  }

  changerPage(numeroPage: number) {
    this.swapiSvc.recherchePersonnage(this.recherche, numeroPage)
      .subscribe(
      ((recherche) => {
        this.pageCourante = recherche.page;
        this.pages = recherche.pages;
        this.resultats = recherche.personnages;
      }),
      (error) => {
        console.log("Pas d'historique");
      });
  }
}
