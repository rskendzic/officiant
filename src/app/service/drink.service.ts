import { Drink } from './../models/Drink';
import { AngularFirestore } from 'angularfire2/firestore';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

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

  createDrink(payload: Drink) {
    const drinkList = this.afs.collection('drinks');
    const id = this.afs.createId();
    drinkList.doc(id).set({ id, ...payload});
    return drinkList.doc(id);
  }
}
