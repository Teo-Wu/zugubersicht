import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zug',
  templateUrl: './zug.page.html',
  styleUrls: ['./zug.page.scss'],
})

export class ZugPage implements OnInit {
editing:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  editmode() {
    if (this.editing==false)
        this.editing=true;
    else
        this.editing=false;
   }
}
