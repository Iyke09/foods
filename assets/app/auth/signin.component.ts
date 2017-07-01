import { Component,OnInit } from '@angular/core';
import { Recipe } from '../Dishes/dish.model';
import {ActivatedRoute, Params,Router} from "@angular/router";
import { AuthService } from './auth.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'my-signin',
    templateUrl: './signin.component.html'
})
export class signinComponent implements OnInit {

    myForm:FormGroup;

    constructor(private route:ActivatedRoute,private authservice:AuthService,private router:Router) { }

    ngOnInit() {
    	this.myForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
	}

	onSubmit() {
	        const user = {
	    		email:this.myForm.value.email,
	    		password:this.myForm.value.password
	    	}
	        this.authservice.signin(user)
	        	.subscribe(
	                data => {
	                	localStorage.setItem('token', data.token);
	                	localStorage.setItem('userId', data.userId);
	                	this.router.navigateByUrl('/main');
	                },
	                error => console.error('myerror')
	            );
        this.myForm.reset();
    }


}


