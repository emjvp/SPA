import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[];
  termino: string;
  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes);
    });
  }
  verHeroe( idx: number ){
    this.router.navigate(['/heroe', idx]);
  }

}
