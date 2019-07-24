import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MenuInterFace } from './menuinterface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  	const mainprice = [
			{	id: 1, 
				dishName: "Voluptate cillum fugiat.", 
				dishDescription: "Cheese, tomato, mushrooms, onions.", 
				dishWeight: 350, 
				dishPrice: 50	},		
			{	id: 2, 
				dishName: "Arcu pede enim justo.", 
				dishDescription: "Tuna, Sweetcorn, Cheese.", 
				dishWeight: 400, 
				dishPrice: 45	},
			{	id: 3, 
				dishName: "Cras dapibussemer nisi.", 
				dishDescription: "Pineapple, Minced Beef, Cheese.", 
				dishWeight: 370, 
				dishPrice: 55	},
			{	id: 4, 
				dishName: "Donec sodales magna.", 
				dishDescription: "Tuna, Sweetcorn, Cheese.", 
				dishWeight: 420, 
				dishPrice: 47	},
			{	id: 5, 
				dishName: "Quam semper libero.", 
				dishDescription: "Cheese, tomato, mushrooms, onions.", 
				dishWeight: 370, 
				dishPrice: 55	},
			{	id: 6, 
				dishName: "Saugue velit cursus.", 
				dishDescription: "Pineapple, Minced Beef, Cheese.", 
				dishWeight: 320, 
				dishPrice: 45	},
			{	id: 7, 
				dishName: "Nam eget dui Etiam.", 
				dishDescription: "Chicken, mozzarella cheese, onions.", 
				dishWeight: 370, 
				dishPrice: 42	}
  	];
  	return {mainprice};
	}
}
