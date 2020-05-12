import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: ''
  };

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router
    ) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe( params['id'] );
    });
  }
  regresarHeroes(){
    this.router.navigate(['/heroes']);
  }
}
