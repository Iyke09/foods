import { Component,OnInit } from '@angular/core';
import { Recipe } from '../Dishes/dish.model';
import {ActivatedRoute, Params} from "@angular/router";
import { RecipeService } from '../Dishes/dish.service';

@Component({
    selector: 'my-auth',
    templateUrl: './auth.component.html'
})
export class authComponent implements OnInit {

    constructor(private route:ActivatedRoute,private recipeservice:RecipeService) { }

    ngOnInit() {
    	
	}

}


