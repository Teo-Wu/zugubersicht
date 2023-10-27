import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zugubersicht',
  templateUrl: './zugubersicht.page.html',
  styleUrls: ['./zugubersicht.page.scss'],
})
export class ZugubersichtPage implements OnInit {
  editing:boolean=false;
  zugnummer: string = '';
  gleis: string = '';
  start: string = '';
  ziel: string = '';
  wagenmeister: string = '';
  kostenstelle: string = '';
  bremshundertstel: string = '';
  anzahlachsen: string = '';
  davonbeladen: string = '';
  davonleer: string = '';
  zuggewicht: string = '';
  davonladung: string = '';
  davonwagen: string = '';
  lok: string = '';
  beschreibung: string = '';
  länge: string = '';
  bremsgewicht: string = '';
  note1:String='Nummer'
  note2:String='Ort'
  note3:String='Name'
  item = [
    { label: 'Zugnummer', model: this.zugnummer, note:this.note1 },
    { label: 'Gleis', model: this.gleis, note:this.note1 },
    { label: 'Start', model: this.start, note:this.note2 },
    { label: 'Ziel', model: this.ziel , note:this.note2},
    { label: 'Wagenmeister', model: this.wagenmeister, note:this.note3 },
    { label: 'Kostenstelle', model: this.kostenstelle , note:this.note1},
    { label: 'Bremshundertstel', model: this.bremshundertstel , note:this.note1},
    { label: 'Anzahl Achsen', model: this.anzahlachsen , note:this.note1},
    { label: 'davon Beladen', model: this.davonbeladen , note:this.note1},
    { label: 'davon Leer', model: this.davonleer , note:this.note1},
    { label: 'Zuggewicht', model: this.zuggewicht , note:this.note1},
    { label: 'davon Ladung', model: this.davonladung , note:this.note1},
    { label: 'davon Wagen', model: this.davonwagen , note:this.note1},
  ];
  item2 = [
    { label: 'Lok', model: this.lok, note:this.note2 },
    { label: 'Beschreibung', model: this.beschreibung, note:this.note2 },
    { label: 'Länge', model: this.länge, note:this.note1 },
    { label: 'Bremsgewicht Gesamt', model: this.bremsgewicht , note:this.note1},
  ];
  constructor() { 
    
  }

  ngOnInit() {
  }

  editmode() {
    if (this.editing==false){
      this.editing=true;

    }
    else
        this.editing=false;
   }

}
