import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable()
export class SpotifyService {
    constructor(public http : HttpClient){

    }
    searchTrack( query :string){
        let params : string = [
            `q=${query}`,
            `type=track`
        ].join('&');
        let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
        return this.http.get(queryURL);
    }
    getTrack(id: string) {
        return this.searchTrack(`/tracks/${id}`);
    }
}
