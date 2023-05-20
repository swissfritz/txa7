import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-buchen1',
  templateUrl: './buchen1.page.html',
  styleUrls: ['./buchen1.page.scss'],
})
export class Buchen1Page implements OnInit {

  mo: string = '';
  di: string = '';
  mi: string = '';
  do: string = '';
  fr: string = '';
  sa: string = '';
  so: string = '';
  basinf: string = '';
  mes1: string = '';
  woche1: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public emailComposer: EmailComposer) { }

  ngOnInit() {
    this.basinf = history.state.bi;
    console.log('Basisinfo: ', this.basinf);
  }

  makeList() {
    this.woche1 = [
      this.mo, this.di, this.mi, this.do, this.fr, this.sa, this.so
    ].filter(day => day !== undefined).join(' ');
  }

  buildMessage() {
    this.makeList();
    this.mes1 = 'Basisinformationen: ' + this.basinf + ', Taxi für nächste Woche: ' + this.woche1;
  }

  goNext() {
    this.buildMessage();
    const navex: NavigationExtras = {
      state: {
        m1: this.mes1
      }
    };
    this.router.navigate([`/buchen2`], navex);
}

  sendMail() {
    this.buildMessage();
    const email = {
      to: 'bestellen@taxiwerbung.at',
      subject: 'Taxi-Reservierung',
      body: this.mes1,
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}
