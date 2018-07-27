import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import * as fromStore from '../../store/'
import * as authActions from '../../store/actions/auth.actions'
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  errorMessage$: Observable<{code: string, message:string}>;

  constructor(private fb: FormBuilder, private store: Store<fromStore.AppState>, private snackBar: MatSnackBar) {
    this.errorMessage$ = this.store.select(fromStore.getErrorMessage);
  }

  registerForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });


  ngOnInit() {
    this.errorMessage$.subscribe(errorMessage => {
      this.snackBar.open(errorMessage.message, '', { duration: 3000, panelClass:'error-toaster'})
    });
  }

  registerUser(userDetails) {
    this.store.dispatch(new authActions.SignUp(userDetails))
  }

}
