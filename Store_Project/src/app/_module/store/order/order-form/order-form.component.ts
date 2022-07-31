import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderModel } from '@models/order.model';
import { FormHelper } from '@share/_helper/form-helper';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  form: FormGroup;
  @Output() submitEmit = new EventEmitter<string>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this._createForm();
  }
  /**
 * @description Create Form group
 */
  private _createForm() {
    this.form = this.fb.group({
      name: this.fb.control("", [Validators.required, Validators.minLength(3)]),
      address: this.fb.control("", [Validators.required, Validators.minLength(6)]),
      creditcard: this.fb.control("", [Validators.required, Validators.maxLength(16)])
    })
  }
  /**
 * @description Submit form group. If data is valid using EmitEvent return value of form.control.name.value
 */
  public submit() {

    if (!this.form.valid) {
      FormHelper.markDirty(this.form);
      return;
    }
    const rawValue = this.form.getRawValue();
    this.submitEmit.emit(rawValue.name);
  }
}
