import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  message: string;

  constructor(private emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  sendMail() {

    const email = {
      to: 'barbara.ketzerau@taxoil.at',
      subject: 'Rückmeldung',
      body: this.message,
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}
