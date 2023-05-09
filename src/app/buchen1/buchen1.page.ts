import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-buchen1',
  templateUrl: './buchen1.page.html',
  styleUrls: ['./buchen1.page.scss'],
})
export class Buchen1Page implements OnInit {

  mo: '';
  di: '';
  mi: '';
  do: '';
  fr: '';
  sa: '';
  so: '';
  basinf: any;
  mes1: string;
  woche1: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public emailComposer: EmailComposer) {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.basinf = this.router.getCurrentNavigation().extras.state.bi;
        }
      });
    }

  ngOnInit() {
  }

  makeList() {
    this.woche1 = [
      this.mo, this.di, this.mi, this.do, this.fr, this.sa, this.so
    ].filter(day => day !== undefined).join(', ');
  }

  buildMessage() {
    this.makeList();
    this.mes1 = 'Basisinformationen: ' + this.basinf + '<br> Taxi für nächste Woche: <br>' + this.woche1;
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
