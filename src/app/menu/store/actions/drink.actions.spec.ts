import * as fromActions from './drink.actions';

describe('Drink Actions', () => {
  describe('LoadDrink Actions', () => {
    describe('LoadDrink', () => {
      test('should create an action', () => {
        const action = new fromActions.GetDrinks('/drinks');
        expect({ ...action }).toEqual({
					type: fromActions.DrinkActionsTypes.GET_DRINKS,
					payload: '/drinks'
				});
      });
    });
  });
});
