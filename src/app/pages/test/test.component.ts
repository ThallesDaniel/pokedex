import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from '../../service/poke-api.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent  implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemon(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
      },
      error => {
        this.apiError = true;
      }
    );
  }
}
