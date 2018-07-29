import { SlideInOutAnimation } from './../../animations/slideInOut.animation';
import * as fromStore from './../../store/reducers';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as authActions from '../../store/actions/auth.actions'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	animations: [SlideInOutAnimation]
})
export class RegisterComponent implements OnInit {
  @Output() toggleRegister = new EventEmitter<boolean>()
  roles = ['Waiter', 'Barmen']
  hide = true;
  @Input() showRegister: boolean;

  constructor(private fb: FormBuilder, private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

  registerForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    role:['Waiter', Validators.required]
  });

  hideRegister(){
    this.toggleRegister.emit()
  }

  registerUser(userDetails) {
    this.store.dispatch(new authActions.SignUp(userDetails))
  }

}
