import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../spotify-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query : string;
  results : object;
  constructor( 
    private spotify : SpotifyService,
    private router : Router,
    private route : ActivatedRoute
    ) { 
      this.route.queryParams.subscribe( params => { this.query = params['query'] || ''; })
    }
  ngOnInit(): void {
    this.search(); 
  }
 
  renderResults(res : any){
    this.results = null;
    if(res && res.tracks && res.tracks.items ){
      this.results = res.tracks.items;
    }
  }

  search() : void{
    console.log('this.query',this.query);
    if(!this.query){
      return;
    }
    this.spotify.searchTrack(this.query).subscribe((res: any) => this.renderResults(res));
  }

  submit(query: string): void {
    this.router.navigate(['search'], { queryParams: { query: query } })
    .then(_ => this.search() );
  }
  
}
