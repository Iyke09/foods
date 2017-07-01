import { Component } from '@angular/core';
import { Recipe } from './dish.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Cart } from './cart.model';
import { RecipeService } from './dish.service';

@Component({
    selector: 'my-maindish',
    templateUrl: './maindish.component.html'
})
export class maindishComponent implements OnInit {
	count:number;
	total:number = 0;
	myForm:FormGroup;

	dishes:Cart[] = [];

    constructor(private recipeservice:RecipeService){}

    ngOnInit() {
    	//---------------->
    	this.myForm = new FormGroup({
            Name: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            image: new FormControl(null, Validators.required),
            price: new FormControl(null, Validators.required),
            category: new FormControl(null, Validators.required)
        });

		this.recipeservice.getCart()
			.subscribe(
                (result:Cart) => {
                	this.dishes = result;
                    const value = this.dishes.length;
                    this.count = value;
                    this.recipeservice.sendItem.emit(this.count);
                    for(let dish of this.dishes){
                    	this.total += dish.price * dish.quantity;
                    }
                }    
                error => console.log('my ' + error)
			);
	}  

	Ondelete(value:string){
		this.recipeservice.delCart(value)
			.subscribe(
				data => console.log(data)  
                error => console.log('mydel ' + error)
			);
	}
}