import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Recipe } from './dish.model';
import { RecipeService } from './dish.service';

@Component({
    selector: 'my-dish',
    templateUrl: './dish.component.html'
})
export class dishComponent implements OnInit {
	myForm:FormGroup;
	dishes:Recipe[];
	dummyid:string;

    constructor(private recipeservice:RecipeService){}

    ngOnInit() {
    	//---------------->

    this.myForm = new FormGroup({
            name: new FormControl(null, Validators.required),
        });

		this.recipeservice.getRecipes()
			.subscribe(
                (message: Recipe[]) => {
                    this.dishes = message;
                }
			);
    }
    onSubmit(){
    	const value = {
    		id:this.dummyid,
    		number:this.myForm.value.name
    	}
    	this.recipeservice.addCart(value)
			.subscribe(
                data => console.log(data)
                error => console.log(error)
			);
    }
    onAdd(id:string){
    	this.dummyid = id;
    }
    
}