import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/Player';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    players: Player[] = [];

    constructor(private httpClient: HttpClient ) { }

    getPlayersByTeam(idTeam: number): Observable<Player[]> {
        return this.httpClient.get<Player[]>(`https://www.balldontlie.io/api/v1/players?per_page=100&team_ids[]=${idTeam}`);
        console.log('Playing...');
    }

    public getAllPlayers(): Observable<Player[]> {
        console.log('getting all players ...');
        return this.httpClient.get<Player[]>('../../assets/data/Players_PIO.json');
    }
}