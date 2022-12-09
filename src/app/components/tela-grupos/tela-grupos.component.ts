import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/classes/match';
import { acopanha } from 'src/app/services/acopanha.service';

@Component({
  selector: 'app-tela-grupos',
  templateUrl: './tela-grupos.component.html',
  styleUrls: ['./tela-grupos.component.css']
})
export class TelaGruposComponent implements OnInit {

  constructor(private _acopanha: acopanha){}

  matchList:Match[];

  ngOnInit(){
    this._acopanha.getMatchs().subscribe(
      data => 
      {
        this.matchList = data;
      }
    )
  }

}
