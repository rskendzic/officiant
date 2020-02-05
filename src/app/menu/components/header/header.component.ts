import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import * as fromMenuStore from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	drinksAreLoading$: Observable<boolean>;

  constructor(private appStore: Store<fromStore.AppState>) {
		this.drinksAreLoading$ = this.appStore.select(fromMenuStore.areDrinksLoading);
  }

  ngOnInit() {
	}
	logOut() {
		this.appStore.dispatch(new fromStore.LogOut())
	}

	toggleSidebar(){
		this.appStore.dispatch(new fromStore.OpenSidebar())
	}

}
