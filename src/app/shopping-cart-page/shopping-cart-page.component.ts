import { Component } from '@angular/core';
import { IOrderForm } from '../interface/order-form.interface';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IOrderDetailForm } from '../interface/order-detail-form.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.css'
})
export class ShoppingCartPageComponent {
  readonly form = new FormGroup<IOrderForm>({
    name: new FormControl<string | null>(null),
    address: new FormControl<string | null>(null),
    telephone: new FormControl<string | null>(null),
    details: new FormArray<FormGroup<IOrderDetailForm>>([])
  });

  get name(): FormControl<string | null>{
    return this.form.get('name') as FormControl<string | null>;
  }

  get address(): FormControl<string | null>{
    return this.form.get('address') as FormControl<string | null>;
  }

  get telephone(): FormControl<string | null>{
    return this.form.get('telephone') as FormControl<string | null>;
  }

  get details(): FormArray<FormGroup<IOrderDetailForm>>{
    return this.form.get('details') as FormArray<FormGroup<IOrderDetailForm>>;
  }

}
