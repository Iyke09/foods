import { Component,OnInit } from '@angular/core';
import { Recipe } from './dish.model';
import {ActivatedRoute, Params} from "@angular/router";
import { RecipeService } from './dish.service';

@Component({
    selector: 'my-list',
    templateUrl: './dishdetail.component.html'
})
export class dishdetailComponent implements OnInit {
    dish:Recipe[];

    Item:string = "";
    id:string;

    // recipeId:any;


    constructor(private route:ActivatedRoute,private recipeservice:RecipeService) { }

    ngOnInit() {
    	
		this.route.params.subscribe(
		   	(params:Params)=>{
		    	this.id = params['id'];
		    	console.log(this.id)
		    }
		)


    	this.recipeservice.getRecipe(this.id)
			.subscribe(
                (message: Recipe[]) => {
                    this.dish = message;
                }

                (error) => console.log('View error' + error)
			);

	}

}


