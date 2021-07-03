import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';
  invalidLogin = false;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthService
  ) { 
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  ngOnInit() {
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.loginForm.invalid) {
            this.invalidLogin = true;
            return;
      }
      this.invalidLogin = false;
      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .then(
              data => {
                  if(data) {
                    this.router.navigate([this.returnUrl]);
                  } else {
                      this.invalidLogin = true;
                  }
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }

}
