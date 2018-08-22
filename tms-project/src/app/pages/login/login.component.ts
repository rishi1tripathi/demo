import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService} from 'app/_services/alert.service';
import { AuthenticationService} from 'app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;


  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
      ) { }

  ngOnInit() 
    {


    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // reset login status
  //this.authenticationService.logout()

  // get return url from route parameters or default to '/'
  //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    //this.router.navigateByUrl('/dashboard');
    this.authenticationService.login(this.f.username.value, this.f.password.value)
       .pipe(first())
    .subscribe(
      data => {
    this.router.navigateByUrl('/dashboard');
    
       }
    //         // error => {
    //         //     this.alertService.error(error);
                
    //         // }
    //       
  );
}





}
