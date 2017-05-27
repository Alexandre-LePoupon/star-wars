import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Personnage } from "app/models/personnage";
import 'rxjs';
import { Recherche } from "app/models/recherche";
import { Film } from "app/models/film";
import { Vehicule } from "app/models/vehicule";
import { Vaisseau } from "app/models/vaisseau";
import { Planete } from "app/models/planete";
import { Espece } from "app/models/espece";


@Injectable()
export class SwapiService {

  private personnageRecherche: String = "";
  private page: number = 1;

  constructor(private http : Http) { }

  recherchePersonnage(nom: String, page): Observable<Recherche> {
      this.personnageRecherche = nom;
      this.page = page;
      return this.http.get("http://swapi.co/api/people/?search=" + nom + "&page=" + page)
      .map((response : Response) => {
        let resultat = response.json();
        
        if (resultat && resultat["results"]) {
          let recherche = new Recherche();
          recherche.personnages = resultat["results"];
          recherche.pages = Math.ceil(Number(resultat["count"]) / 10);
          recherche.page = page;
          return recherche;
        } else {
          return Observable.throw("Bad response");
        }
      });
  }

  detailsPersonnage(url: string): Observable<Personnage> {
      return this.http.get(url)
      .map((response : Response) => {
        let resultat = response.json();
        if (resultat && !resultat.Error) {
          return resultat;
        } else {
          return Observable.throw("Bad response");
        }
      });
  }

  detailsFilm(url: string): Observable<Film> {
      return this.http.get(url)
      .map((response : Response) => {
        let resultat = response.json();
        if (resultat && !resultat.Error) {
          return resultat;
        } else {
          return Observable.throw("Bad response");
        }
      });
  }

  detailsEspece(url: string): Observable<Espece> {
      return this.http.get(url)
      .map((response : Response) => {
        let resultat = response.json();
        if (resultat && !resultat.Error) {
          return resultat;
        } else {
          return Observable.throw("Bad response");
        }
      });
  }

  detailsPlanete(url: string): Observable<Planete> {
      return this.http.get(url)
      .map((response : Response) => {
        let resultat = response.json();
        if (resultat && !resultat.Error) {
          return resultat;
        } else {
          return Observable.throw("Bad response");
        }
      });
  }

  detailsVaisseau(url: string): Observable<Vaisseau> {
      return this.http.get(url)
      .map((response : Response) => {
        let resultat = response.json();
        if (resultat && !resultat.Error) {
          return resultat;
        } else {
          return Observable.throw("Bad response");
        }
      });
  }

  detailsVehicule(url: string): Observable<Vehicule> {
      return this.http.get(url)
      .map((response : Response) => {
        let resultat = response.json();
        if (resultat && !resultat.Error) {
          return resultat;
        } else {
          return Observable.throw("Bad response");
        }
      });
  }
}
