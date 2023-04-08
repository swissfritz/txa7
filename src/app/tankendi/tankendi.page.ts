import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tankendi',
  templateUrl: './tankendi.page.html',
  styleUrls: ['./tankendi.page.scss'],
})
export class TankendiPage implements OnInit {
  public alertButtons = [
    {
      text: 'Schließen',
      role: 'confirm',
      cssClass: 'customButtoncss',
      handler: () => { console.log('Alert confirmed'); }
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tanken');
  }
}
