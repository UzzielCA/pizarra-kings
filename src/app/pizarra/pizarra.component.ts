import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../models/Player';

@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
  styleUrls: ['./pizarra.component.scss']
})
export class PizarraComponent implements OnInit {

  players: Player[] = [];
  draggedPlayer: Player | null = null;
  droppedPlayers: { player: Player, x: number, y: number }[] = [];

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(players => {
      this.players = players;
    });

  }

  onDragStart(event: DragEvent, player: Player): void {
    this.draggedPlayer = player;
    event.dataTransfer?.setData('text/plain', JSON.stringify(player));
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const data = event.dataTransfer?.getData('text/plain');
    if (data) {
      const player = JSON.parse(data) as Player;
      const x = event.offsetX;
      const y = event.offsetY;
      this.droppedPlayers.push({ player, x, y });
      console.log('Player dropped:', player.shortName, 'at', x, y);
    }
    this.draggedPlayer = null;
  }

}
