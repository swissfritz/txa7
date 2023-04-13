import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-buchen',
  templateUrl: './buchen.page.html',
  styleUrls: ['./buchen.page.scss'],
})
export class BuchenPage implements OnInit {

  public buchenForm = this.fb.group({
      names: ['', Validators.required],
      sameCar: false,
    });

  constructor(
    public fb: FormBuilder,
    private router: Router
  ){  }

  ngOnInit() {
  }

  onSubmit() {

    const value = this.buchenForm.value;

    if (this.buchenForm.valid && value.names) {
      const nomen = this.buchenForm.value.names;
      const sameCar = this.buchenForm.value.sameCar;
      let fzGleich;
      if (sameCar === true) {
        fzGleich = 'Gleiches Fahrzeug: JA';
      } else {
        fzGleich = 'Gleiches Fahrzeug: NEIN';
      }

      const basinf = 'Name: ' + nomen + ', ' + fzGleich;

      const navex: NavigationExtras = {
        state: {
          bi: basinf
        }
      };

      this.router.navigate([`/buchen1`], navex);
    }
  }
}
