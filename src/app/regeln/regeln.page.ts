/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regeln',
  templateUrl: './regeln.page.html',
  styleUrls: ['./regeln.page.scss'],
})
export class RegelnPage implements OnInit {
  public alertButtons = [
    {
      text: 'Schließen',
      role: 'confirm',
      cssClass: 'customButtoncss',
      handler: () => { console.log('Alert confirmed'); }
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
