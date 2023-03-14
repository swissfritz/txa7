/* eslint-disable max-len */
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regeln',
  templateUrl: './regeln.page.html',
  styleUrls: ['./regeln.page.scss'],
})
export class RegelnPage implements OnInit {

  constructor(private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async opnLeuchten() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Am Armaturenbrett leuchtet ROTE Warnung:</strong><br><br>Bitte Motor abstellen und nicht mehr starten! Zum Menupunkt Panne gehen.',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async opnUnfall() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Unfall:</strong><br><br>Bitte zum Menupunkt Unfall gehen.',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async opnTanken() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Tanken:</strong><br><br>Tanken ausschließlich mit Tankkarte (Lehner) an ENI-Tankstellen (Menupunkt Tanken)',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async opnSaug() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Saugen:</strong> Bitte Ihr Taxi nur in der Firma saugen!<br><strong>Waschen:</strong> mit Zulassungsschein (Taxoil) um € 3,90 bei ENI - Rautenweg <br> <strong>Innenreinigung:</strong> bei Herrn Lehner anmelden und wir reinigen es gründlich. ',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async opnAbst() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Auto abstellen:</strong><br><br> Wenn Sie das Taxi abholen oder aber das Auto abstellen, dann gehört es auf die Julius-Ficker-Straße. Im Hof abstellen bitte nur zur Reparatur!',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async opnZusatz() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Zusatzeinbauten:</strong><br><br>Zusatzeinbauten nur in unserer Werkstätte!',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async opnRauch() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Rauchverbot:</strong><br><br>Wenn in Ihrem Taxi geraucht wird, wird es für Sie teuer!',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async opnBruch() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Einbruch</strong><br><br>Nichts im Wagen liegen lassen, auch nicht für 2 Minuten, Taxieinbrecher sind darauf spezielisiert! Zu Ihrer fehlenden Brieftasche kommt noch die Scheibe dazu.',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }
}
