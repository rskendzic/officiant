import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { take } from 'rxjs/operators';

import { MenuItem } from '../models/MenuItem';

@Injectable()
export class DrinkService {
	constructor(private afs: AngularFirestore) {}

	getDrinks(payload: string) {
		const drinks = this.afs.collection(payload).valueChanges().pipe(take(1));
		return drinks;
	}

	deleteDrink(drinkId: string) {
		return from(this.afs.collection('drinks').doc(drinkId).delete());
	}

	updateDrink(drink: MenuItem) {
		return from(
			this.afs
				.collection('drinks')
				.doc(drink.key)
				.update({
					...drink,
				})
		);
	}

	createDrink(payload: MenuItem) {
		const drinkList = this.afs.collection('drinks');
		const key = this.afs.createId();
		drinkList.doc(key).set({ ...payload, key });
		return from(drinkList.doc(key).ref.get());
	}
}
