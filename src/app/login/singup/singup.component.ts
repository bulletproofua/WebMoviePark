import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { UserApi } from '../../shared/sdk/services';

import { AccessToken } from '../../shared/sdk/models';

@Component({
    selector: 'app-singup',
    templateUrl: './singup.component.html',
    styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
    
    private userAC : AccessToken;
    
    form = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.minLength(10),
            Validators.email
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ])
    });
    
    get email() {
        return this.form.get('email');
    }
    get password() {
        return this.form.get('password');
    }
    
    constructor(private userApi : UserApi, private router : Router) { }
    
    onSubmit() {
        let credentials = {
            email : this.form.get("email").value || "",
            password : this.form.get("password").value || ""
        }
        
        console.log("credentials", credentials);
        
        this.userApi.login(credentials).subscribe(
            (ac : AccessToken) => {
                this.userAC = ac;
                this.router.navigateByUrl('/Movies');
            },
            (err) => {
                this.form.setErrors({
                    error: err.message
                });
                console.log("ERROR : ", err);
            }
        );
    }
    
    logout() {
        this.userApi.logout().subscribe(
            () => {
                console.log("Logged out : "),
                this.router.navigateByUrl('/singup')
            },
            (err) => console.log("ERROR : ", err)
            
        );
    }
}
