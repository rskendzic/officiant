import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from '../models/MenuItem';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as drinkActions from '../store/actions/drink.actions';
import * as fromStore from '../store';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateUpdateDialogComponent } from '../components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

	drinks$: Observable<MenuItem[]>;
  drinksAreLoading$: Observable<boolean>;
  firebaseUpdated$: Observable<any>;

  constructor(
    private store: Store<fromStore.MenuState>,
    private dialog: MatDialog) {
      this.drinks$ = this.store.select(fromStore.getAllDrinks);
      this.drinksAreLoading$ = this.store.select(fromStore.areDrinksLoading);
  }

  getDrinks() {
    this.store.dispatch(new drinkActions.GetDrinks('/drinks'));
  }

  onSubmit(formValue) {
    this.store.dispatch(new drinkActions.CreateDrink(formValue));
  }

	updateDrink(drink: MenuItem) {
    const dialogRef = this.dialog.open(CreateUpdateDialogComponent, {
      data: drink
    });

    dialogRef.afterClosed().subscribe(updatedDrink => {
      if (updatedDrink) {
        this.store.dispatch(new drinkActions.UpdateDrink(updatedDrink));
      }
    });
  }

  createDrink(): void {
    const dialogRef = this.dialog.open(CreateUpdateDialogComponent, new MatDialogConfig());
    dialogRef.afterClosed().subscribe(createdDrink => {
      if (createdDrink) {
        this.store.dispatch(new drinkActions.CreateDrink(createdDrink));
      }
    });
  }

	deleteDrink(drink: MenuItem) {
    this.store.dispatch(new drinkActions.DeleteDrink(drink));
  }


  ngOnInit() {
    this.getDrinks();
  }

}
