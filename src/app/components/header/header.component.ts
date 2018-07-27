import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../menu/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // drinksAreLoading$: Observable<boolean>;

  constructor(private store: Store<fromStore.MenuState>) {
    // this.drinksAreLoading$ = this.store.select(fromStore.areDrinksLoading);
  }

  ngOnInit() {
  }

}
