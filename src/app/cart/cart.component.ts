

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
 selector: 'app-cart',
 templateUrl: './cart.component.html',
 styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 sum = 0;
 discount = 0;
 forSum;
 items;
 checkoutForm;

 constructor(private cartService: CartService, private formBuilder: FormBuilder) {
         this.checkoutForm = this.formBuilder.group({
     name: '',
     address: ''
   });
 }

 ngOnInit() {
         
         this.sum= 0;
         this.discount= 0
         this.items = this.cartService.getItems();
         console.log(this.items);
         this.sum = this.cartService.getSum();
         
         //        
 }

 ngAfterContentInit(){
  this.forSum = this.cartService.clearSumItems();
  this.discount = 0;

 }

 onSubmit(customerData) {
   // Process checkout data here
   console.warn('Your order has been submitted', customerData);
   window.alert('Your travels have been ordered');

   this.items = this.cartService.clearCart();
   this.sum = 0;
   this.checkoutForm.reset();
 }

}