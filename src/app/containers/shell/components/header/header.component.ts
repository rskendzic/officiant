import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenuStore from '../../../../menu/store';
import * as fromStore from '../../../../store';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	drinksAreLoading$: Observable<boolean>;

	constructor(private appStore: Store<fromStore.AppState>) {
		this.drinksAreLoading$ = this.appStore.select(fromMenuStore.areDrinksLoading);
	}

	ngOnInit() {}
	logOut() {
		this.appStore.dispatch(new fromStore.LogOut());
	}

	toggleSidebar() {
		this.appStore.dispatch(new fromStore.OpenSidebar());
	}
}
