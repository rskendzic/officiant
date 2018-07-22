import { Drink } from '../models/Drink';
import { AngularFirestore } from 'angularfire2/firestore';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable()
export class DrinkService {
  constructor(private afs: AngularFirestore) { }

  getDrinks(payload: string) {
    const drinks = this.afs.collection(payload)
    .valueChanges()
    .pipe(
      take(1)
    );
    return drinks;
  }

  deleteDrink(drinkId: string) {
    return from(this.afs.collection('drinks').doc(drinkId).delete());
  }

  updateDrink(drink: Drink) {
    return from(this.afs.collection('drinks').doc(drink.id).update({
      ...drink
    }));
  }


  createDrink(payload: Drink) {
    const drinkList = this.afs.collection('drinks');
    const id = this.afs.createId();
    drinkList.doc(id).set({ ...payload, id });
    return drinkList.doc(id);
  }
}
