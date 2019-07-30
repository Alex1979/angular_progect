import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MenuInterFace } from './menuinterface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
	createDb(): {} {
		return {
			mainprice: [
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
  		],
  		topdishes: [
	  			{
					id: 1,
					title: "Fugiat nulla sint",
					price: 30,
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate error delectus quis nemo ut quos atque ad totam, dolor quod, unde laboriosam eligendi excepturi quas?",
					img: "../assets/img/image_one.jpg"
				},
			    {
			    	id: 2,
			    	title: "Daute irure dolor",
			    	price: 24,
			    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate error delectus quis nemo ut quos atque ad totam, dolor quod, unde laboriosam eligendi excepturi quas?",
			    	img: "../assets/img/image_two.jpg"
			    },
			    {
			    	id: 3,
			    	title: "Pim minim veniam",
			    	price: 47,
			    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate error delectus quis nemo ut quos atque ad totam, dolor quod, unde laboriosam eligendi excepturi quas?",
			    	img: "../assets/img/image_three.jpg"
			    },
			    {
			    	id: 4,
			    	title: "Officia deserunt mollit",
			    	price: 35,
			    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate error delectus quis nemo ut quos atque ad totam, dolor quod, unde laboriosam eligendi excepturi quas?",
			    	img: "../assets/img/image_four.jpg"
			    },
			    {
			    	id: 5,
			    	title: "Lorem ipsum dolor sit amet",
			    	price: 38,
			    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate error delectus quis nemo ut quos atque ad totam, dolor quod, unde laboriosam eligendi excepturi quas?",
			    	img: "../assets/img/image_one.jpg"
			    }
			],
			review: [
				{
					id: 1,
					title: "Lorem ipsum dolor",
					text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo hic necessitatibus earum dolore facere dicta neque iusto ab voluptate suscipit maxime commodi nesciunt, quia consequuntur assumenda reprehenderit quisquam debitis perferendis, minima nihil sit unde saepe. Ipsum, hic, incidunt!",
					img: "../assets/img/breakfast.png"
		    	},
		    	{
		    		id: 2,
		    		title: "Consectetur adipisicing elit",
		    		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est doloremque repellat sit, eligendi excepturi, sapiente, possimus magni repellendus, tempora deleniti vel. Earum illo nostrum tempora corporis totam, aspernatur, omnis, repudiandae harum, quasi ducimus voluptatem a.",
		    		img: "../assets/img/dish.png"
		    	},
		    	{
		    		id: 3,
		    		title: "Est doloremque repellat",
		    		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod perferendis eum ipsa iure! In sequi, aperiam? Officiis nostrum doloremque facere ipsa repellendus quod quidem, nobis asperiores repudiandae? Consectetur aspernatur, beatae vero molestias eveniet dolorum, distinctio aut, facere, tempore illum eaque eius ex aliquid. Non, fuga.",
		    		img: "../assets/img/breakfast.png"
		    	}
			]
		}
	}
}
