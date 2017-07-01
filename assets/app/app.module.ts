import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { mainComponent } from "./Dishes/main.component";
import { dishdetailComponent } from "./Dishes/dishdetail.component";
import { dishlistComponent } from "./Dishes/dishlist.component";
import { maindishComponent } from "./Dishes/maindish.component";
import { authComponent } from "./auth/auth.component";
import { signupComponent } from "./auth/signup.component";
import { signinComponent } from "./auth/signin.component";
import { dishComponent } from "./Dishes/dish.component";
import { RecipeService } from "./Dishes/dish.service";
import { AuthService } from "./auth/auth.service";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: mainComponent, children:[
        {path:'', component:dishComponent },
        {path:':id', component:dishdetailComponent },
        {path:'restaurants', component:dishlistComponent },
        {path:'carts', component:maindishComponent },
    	{path:'auth', component: authComponent, children:[
    		{path:'' component: authComponent},
    		{path:'signup' component: signupComponent},
    		{path:'signin' component: signinComponent}
    	]}
    ]}
]

@NgModule({
    declarations: [
        AppComponent,
        mainComponent,
        dishdetailComponent,
        dishlistComponent,
        dishComponent,
        maindishComponent,
        signinComponent,
        signupComponent,
        authComponent
    ],
    imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [RecipeService,AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}