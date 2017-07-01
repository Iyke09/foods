import { Component,OnInit} from '@angular/core';
import { Recipe } from './dish.model';
import { RecipeService } from './dish.service';

@Component({
    selector: 'my-list',
    templateUrl: './dishlist.component.html'
})
export class dishlistComponent implements OnInit {
    dishes:Recipe[];

    dish:Recipe;

    constructor(private recipeservice:RecipeService){}

    ngOnInit() {
    	//---------------->
		this.recipeservice.getRecipes()
			.subscribe(
                (message: Recipe[]) => {
                    this.dishes = message;
                }
			);
    }
    onClick(id:string){
    	this.recipeservice.Selected.emit(id);
    	console.log(id)
    }
}