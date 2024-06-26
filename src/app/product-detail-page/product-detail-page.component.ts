import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent {
  @Input()
  product!: Product;

  private router = inject(Router);

  onAddToCart():void{
  }

  onBack(): void{
    this.router.navigate(['products']);
  }
}
