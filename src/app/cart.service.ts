import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
 providedIn: 'root'
})
export class CartService {
  sum: number = 0;
  
  sumItems = [];
  items = [];
 constructor() { }

 addToCart(product) {
   this.items.push(product);
   this.sumItems.push(product);
 }

 getItems() {
   return this.items;
 }

 getSumItems(){
  return this.sumItems;
 }

 getSum(){
  
  for ( var i in this.sumItems){
    var summean:number = this.sumItems[i].price;
    this.sum  += summean;


  } 
  if(this.sum >= 200 && this.sum <500){
      
      this.sum = this.sum*0.9;
    }
  if(this.sum>= 500){
     
      this.sum = this.sum*0.8;
      
    }
  
  console.log(this.sum)
   
  return this.sum;
  
  
 }

clearSumItems(){
  this.sumItems =[];
  return this.sumItems;  
}

 clearCart() {
   this.items = [];
   return this.items;
 }
}