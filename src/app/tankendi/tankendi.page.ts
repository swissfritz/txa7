import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tankendi',
  templateUrl: './tankendi.page.html',
  styleUrls: ['./tankendi.page.scss'],
})
export class TankendiPage implements OnInit {
  public alertButtons = ['Schließen'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tanken');
  }
}
