import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router
    ) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino: string ){
    const terminof = termino.trim();
    /*
    this.router.navigate(['heroes', terminof]);
    */
    this.router.navigate(['buscar', terminof])
  }

}
