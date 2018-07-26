import * as fromActions from './drink.actions';

describe('Drink Actions', () => {
  describe('LoadDrink Actions', () => {
    describe('LoadDrink', () => {
      it('should create an action', () => {
        const action = new fromActions.GetDrinks('/drinks');

        expect({ ...action }).toEqual({
          type: fromActions.DrinkActionsTypes.GET_DRINKS,
        });
      });
    });
  });
});
