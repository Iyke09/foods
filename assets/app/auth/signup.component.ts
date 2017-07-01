import { Component,OnInit } from '@angular/core';
import { User } from './auth.model';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'my-signup',
    templateUrl: './signup.component.html'
})
export class signupComponent implements OnInit {
	myForm:FormGroup;

    constructor(private route:ActivatedRoute,private authservice:AuthService, private router:Router) { }

    ngOnInit() {
    	this.myForm = new FormGroup({
            fname: new FormControl(null, Validators.required),
            lname: new FormControl(null, Validators.required),
            image: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
	}

	onSubmit() {
        const user = new User(
        	1,
            this.myForm.value.fname,
            this.myForm.value.lname,
            this.myForm.value.image,
            this.myForm.value.email,
            this.myForm.value.password
        );
        this.authservice.signup(user)
        	.subscribe(
                data => {
                	console.log(data)
                	this.router.navigateByUrl('/main/auth/signin');
                }
                error => console.error('myerror')
            );
        this.myForm.reset();
    }

}


