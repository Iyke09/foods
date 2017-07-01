import { Recipe } from './dish.model';
import { Cart } from './cart.model';
import { Injectable,EventEmitter} from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";


@Injectable()
export class RecipeService{

	Selected = new EventEmitter<Recipe>();

	sendItem = new EventEmitter<number>();

	private recipes: Recipe[] = [];
	private cart: Cart[] = [];

	constructor(private http:Http){

	}

	addCart(cart:{data:{id:string,number:number}}){
        const body = JSON.stringify(cart);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/main/addcart', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
	}
    delCart(message: string) {
        return this.http.delete('http://localhost:3000/main/' + message)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json));
    }
	getCart(){
		return this.http.get('http://localhost:3000/main/cart')
            .map((response: Response) => {
                const messages = response.json().obj;
                console.log(messages);
                let newMessages: Cart[] = [];
                for (let message of messages) {
                    newMessages.push(new Cart(
                    	message._id,
                        message.name,
                        message.imagePath,
                        message.price,
                        message.quantity
                        )
                    )
                }
                this.cart = newMessages;
                return newMessages;
            })
            .catch((error: Response) => Observable.throw(error.json));
	}
	console.log(this.cart)
    getRecipes(){
    	return this.http.get('http://localhost:3000/main/dishesx')
            .map((response: Response) => {
                const messages = response.json().obj;
                let newMessages: Recipe[] = [];
                for (let message of messages) {
                    newMessages.push(new Recipe(
                    	message._id,
                        message.name,
                        message.description,
                        message.imagePath,
                        message.price,
                        message.category,
                        message.like
                        )
                    )
                }
                this.recipes = newMessages;
                return newMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    } 

    getRecipe(recipe:string){
    	return this.http.get('http://localhost:3000/main/dishesx/' + recipe)
            .map((response: Response) => {
                const messages = response.json().obj;
                let newMessages: Recipe[] = [];
                    newMessages.push(new Recipe(
                    	messages._id,
                        messages.name,
                        messages.description,
                        messages.imagePath,
                        messages.price,
                        messages.category,
                        messages.like
                        )
                    );
                return newMessages;
            })
            .catch((error: Response) => Observable.throw(error.json));
    } 

    addItem(recipe: Recipe) {
    	console.log(recipe)
        const body = JSON.stringify(recipe);
        const header = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/main/add', body, {headers: header})
            .map((response: Response) => {
                const messages = response.json().obj;
                const message = new Recipe(
                    	messages._id,
                        messages.name,
                        messages.description,
                        messages.imagePath,
                        messages.price,
                        messages.category,
                        messages.like
                    );
                this.recipes.push(message);
                return message;
            })
            .catch((error: Response) => Observable.throw(error.json));
    }

}







		// new Recipe("Best Test Recipe",
		// `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
		//  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco `,
		// "https://static.pexels.com/photos/48726/pexels-photo-48726.jpeg" ,
		// "45",
		// "Chinesse",
		// 24
		// ),

		// new Recipe("American Burger Recipe",
		// 		`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
		//  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco `,
		// "https://static.pexels.com/photos/23086/food-restaurant-kitchen-meat-23086.jpg",
		// "25",
		// "Dessert",
		// 8
		// ),
		// new Recipe("Chinesse Salad Recipe",
		// 		`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
		//  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco `,
		// "https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg",
		// "15",
		// "Chinesse",
		// 8
		// )
	
