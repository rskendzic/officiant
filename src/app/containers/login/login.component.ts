import { SlideInOutAnimation } from '../../animations/slideInOut.animation';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import * as fromStore from '../../store'
import * as authActions from '../../store/actions/auth.actions'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [SlideInOutAnimation]
})
export class LoginComponent implements OnInit {
	showRegister = false;
	hide = true;

  constructor(private fb: FormBuilder, private store: Store<fromStore.AppState>) {
  }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  toggleRegister(){
    this.showRegister = !this.showRegister
  }


  ngOnInit() {
  }

  signIn(userDetails) {
    this.store.dispatch(new authActions.SignIn(userDetails))
  }

  signInWithGoogle() {
    // this.store.dispatch(new authActions.SignInWithGoogle(userDetails))
  }

}
