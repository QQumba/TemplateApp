import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FormHelper } from 'src/app/util/form-helper';

@Component({
  selector: 'app-at-form-group',
  templateUrl: './at-form-group.component.html',
  styleUrls: ['./at-form-group.component.scss'],
})
export class AtFormGroupComponent implements OnInit {
  public warning = faCircleExclamation;

  public form: FormGroup;
  public helper: FormHelper;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: [''],
        zip: this.fb.group({
          a: [''],
          b: [''],
        }),
      }),
    });

    this.helper = new FormHelper(this.form);
  }

  ngOnInit(): void {}
}
