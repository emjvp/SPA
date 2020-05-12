import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router/*, ActivatedRoute */} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  /*heroesfiltrados: Heroe [] = [];*/
  constructor( private heroesService: HeroesService,
               private router: Router/*,
               private activatedRoute: ActivatedRoute*/
               ) {}

  ngOnInit(): void {

    this.heroes = this.heroesService.getHeroes();
    /*this.activatedRoute.params.subscribe( params => {
      this.heroesfiltrados = this.heroesService.buscarHeroes( params['termino'] );
    });*/
  }

  verHeroe( idx: number ){
    this.router.navigate(['/heroe', idx]);
  }

}
