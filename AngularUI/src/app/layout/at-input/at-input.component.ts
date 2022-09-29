import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormHelper } from 'src/app/util/form-helper';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-at-input',
  templateUrl: './at-input.component.html',
  styleUrls: ['./at-input.component.scss'],
})
export class AtInputComponent implements OnInit {
  // icons
  public warning = faCircleExclamation;

  @Input() public formGroupName?: string;
  @Input() public inputControlName!: string;
  @Input() public form!: FormGroup;

  public helper?: FormHelper;
  
  public ngOnInit(): void {
    this.helper = new FormHelper(this.form);
  }
}
