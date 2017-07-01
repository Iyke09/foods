import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { RecipeService } from "./dish.service";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "./dish.model";

@Component({
    selector: 'my-main',
    templateUrl: '/main.component.html'
})
export class mainComponent implements OnInit {
    myForm: FormGroup;
    cart:number = 0;
    check:boolean;

    constructor(private recipeservice: RecipeService,private authservice:AuthService) {}

    onSubmit() {
        const dish = new Recipe(
        	1,
            this.myForm.value.Name,
            this.myForm.value.description,
            this.myForm.value.image,
            this.myForm.value.price,
            this.myForm.value.category,
            5
        );
        this.recipeservice.addItem(dish).subscribe(
                data => console.log(data)
                error => console.error('myerror')
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            Name: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            image: new FormControl(null, Validators.required),
            price: new FormControl(null, Validators.required),
            category: new FormControl(null, Validators.required)
        });

        this.recipeservice.sendItem.subscribe(
        		(data:number) => {
        			this.cart = data;
        		}
        	)
        this.check = this.authservice.isLoggedIn();
        console.log(this.check)
    }
    logout(){
    	this.authservice.logout()
    }
}