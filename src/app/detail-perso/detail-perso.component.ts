import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SwapiService } from "app/services/swapi.service";
import { Personnage } from "app/models/personnage";
import { Film } from "app/models/film";
import { Espece } from "app/models/espece";
import { Planete } from "app/models/planete";
import { Vaisseau } from "app/models/vaisseau";
import { Vehicule } from "app/models/vehicule";

@Component({
  selector: 'app-detail-perso',
  templateUrl: './detail-perso.component.html',
  styleUrls: ['./detail-perso.component.css']
})
export class DetailPersoComponent implements OnInit {

  private sub: any;
  private url: string = "";
  public personnage: Personnage = new Personnage();
  public films: Film[] = [];
  public vaisseaux: Vaisseau[] = [];
  public vehicules: Vehicule[] = [];
  public espece: Espece = new Espece();
  public planete: Planete = new Planete();

  constructor(private route: ActivatedRoute, private swapiSvc: SwapiService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.url = params["id"];
      this.swapiSvc.detailsPersonnage(this.url)
        .subscribe(
        (response) => {
          this.personnage = response;
          this.detailsPlanete(this.personnage.homeworld);
          this.detailsEspece(this.personnage.species);
          this.detailsFilm(this.personnage.films);
          this.detailsVaisseaux(this.personnage.starships);
          this.detailsVehicules(this.personnage.vehicles);
        }),
        (error) => {
          console.log(error);
        }
    });
  }

  detailsFilm(urlFilm: string[]) {
    urlFilm.forEach(element => {
      this.swapiSvc.detailsFilm(element)
        .subscribe(
        (response) => {
          this.films.push(response);
        }),
        (error) => {
          console.log(error);
        }
    });
  }

  detailsVaisseaux(urlVaisseau: string[]) {
    urlVaisseau.forEach(element => {
      this.swapiSvc.detailsVaisseau(element)
        .subscribe(
        (response) => {
          this.vaisseaux.push(response);
        }),
        (error) => {
          console.log(error);
        }
    });
  }

  detailsVehicules(urlVehicule: string[]) {
    urlVehicule.forEach(element => {
      this.swapiSvc.detailsVehicule(element)
        .subscribe(
        (response) => {
          this.vehicules.push(response);
        }),
        (error) => {
          console.log(error);
        }
    });
  }

  detailsEspece(urlEspece: string) {
     this.swapiSvc.detailsEspece(urlEspece)
        .subscribe(
        (response) => {
          this.espece = response;
        }),
        (error) => {
          console.log(error);
        }
  }

  detailsPlanete(urlPlanete: string) {
     this.swapiSvc.detailsPlanete(urlPlanete)
        .subscribe(
        (response) => {
          this.planete = response;
        }),
        (error) => {
          console.log(error);
        }
  }

  afficherInfoFilm(film: Film) {
    //ToDo afficher popup avec info film
  }

}
