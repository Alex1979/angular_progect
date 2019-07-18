import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MenuInterFace } from './menuinterface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService /*implements InMemoryDbService*/ {
  createDb() {
  	const menudata = [
			{	"dishname": "Voluptate cillum fugiat.", 
				"dishdescription": "Cheese, tomato, mushrooms, onions.", 
				"dishweight": 350, 
				"dishprice": 50	},
			{	"dishname": "Arcu pede enim justo.", 
				"dishdescription": "Tuna, Sweetcorn, Cheese.", 
				"dishweight": 400, 
				"dishprice": 45	},
			{	"dishname": "Cras dapibussemer nisi.", 
				"dishdescription": "Pineapple, Minced Beef, Cheese.", 
				"dishweight": 370, 
				"dishprice": 55	},
			{	"dishname": "Donec sodales magna.", 
				"dishdescription": "Tuna, Sweetcorn, Cheese.", 
				"dishweight": 420, 
				"dishprice": 47	},
			{	"dishname": "Quam semper libero.", 
				"dishdescription": "Cheese, tomato, mushrooms, onions.", 
				"dishweight": 370, 
				"dishprice": 55	},
			{	"dishname": "Saugue velit cursus.", 
				"dishdescription": "Pineapple, Minced Beef, Cheese.", 
				"dishweight": 320, 
				"dishprice": 45	},
			{	"dishname": "Nam eget dui Etiam.", 
				"dishdescription": "Chicken, mozzarella cheese, onions.", 
				"dishweight": 370, 
				"dishprice": 42	}
  	];
  	return {menudata};
	}
}
