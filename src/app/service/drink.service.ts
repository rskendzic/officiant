import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

import { Drink } from './../models/Drink';
import { Injectable } from '@angular/core';

@Injectable()
export class DrinkService {
  constructor(private db: AngularFireDatabase) { }

  createDrink(payload: Drink) {
    const drinkList = this.db.list('drinks');
    return drinkList.push(payload);
  }
}
