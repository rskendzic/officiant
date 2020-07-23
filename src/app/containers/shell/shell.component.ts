import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../menu/store';
import { isSidebarOpen } from '../../store/selectors';

@Component({
	selector: 'app-shell',
	templateUrl: './shell.component.html',
	styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
	isSidebarOpened$: Observable<boolean>;
	constructor(private store: Store<fromStore.MenuState>) {
		this.isSidebarOpened$ = this.store.pipe(select(isSidebarOpen));
	}

	ngOnInit(): void {}
}
