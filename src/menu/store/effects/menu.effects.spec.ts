import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/drink.actions';
import * as fromEffects from './drink.effect';

import { MenuEffects } from './menu.effects';

describe('MenuService', () => {
  let actions$: Observable<any>;
  let effects: MenuEffects;
  const drinks = [{
    'category': 'beer',
    'id': 0,
    key: '7fK2jxiK9drU8pa8bPtD',
    name: 'Stela Artois',
    price: 250
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MenuEffects,
        fromEffects.DrinkEffects,
        provideMockActions(() => actions$)
      ]
    });
    actions$ = TestBed.get(actions$);
    effects = TestBed.get(fromEffects.DrinkEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
