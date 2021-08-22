import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/interfaces/models';
import { HttpService } from 'src/app/services/http.service';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { LoaderService } from '../../services/loader.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sort: any;
  games: Array<Game>;
  activatedRouteSub : Subscription;
  gameSub : Subscription;
  showloader = false;
  constructor(
    private httpService : HttpService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    // private spinner : LoaderService
  ) { }

  ngOnInit(): void {
    this.activatedRouteSub = this.activatedRoute.params.subscribe((params: Params) => {
      if(params['game-search']) {
        this.searchGames('metacrit', params['game-search'])
      }
      else {
        this.searchGames('metacrit')
      }
    })
  }

  searchGames(sort: string, search?:string): void{
    this.showloader = true
    // this.gameSub = this.httpService.getGameList(sort, search).subscribe((gameList : APIResponse<Game>) => {
    //   this.games = gameList.results;
    //   this.showloader = false;
    //   console.log(gameList)
    // })
  }

  openGameDetails(gameId : string): void {
    this.router.navigate(['details', gameId])
  }

  ngOnDestroy() {
    if (this.activatedRouteSub) this.activatedRouteSub.unsubscribe();
    if (this.gameSub) this.gameSub.unsubscribe();
  }

}
