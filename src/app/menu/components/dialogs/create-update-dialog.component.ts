import { FormBuilder, Validators } from '@angular/forms';
import { Drink } from '../../models/Drink';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject, Component, OnInit } from '@angular/core';

interface DrinkCategory { name: string, value: string }

@Component({
  selector: 'app-create-update-dialog',
  templateUrl: 'create-update-dialog.component.html',
})
export class CreateUpdateDialogComponent implements OnInit {

  drinksForm = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    price: ['', Validators.required],
    key: [null],
    id: [null],
	});

	private DRINK_CATEGORIES: DrinkCategory[]= [
		{
			name: 'Beer',
			value: 'BEER'
		},
		{
			name: 'Coffee',
			value: 'COFFEE'
		},
		{
			name: 'Juice',
			value: 'JUICE'
		},
		{
			name: 'Water',
			value: 'WATER'
		},
		{
			name: 'Wine',
			value: 'WINE'
		}
	]

  title =  'CREATE_DRINK';
  buttonText =  'Create';

  constructor(
    public dialogRef: MatDialogRef<CreateUpdateDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editDrinkData: Drink) { }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  close(): void {
    this.dialogRef.close(null);
  }

  saveDrink(drink: Drink): void {
    this.dialogRef.close(drink);
  }

  ngOnInit() {
    if (this.editDrinkData) {
			this.title = 'EDIT_DRINK';
      this.buttonText = 'Update';
      this.drinksForm.setValue(this.editDrinkData);
    }
	}

	compareFn(compared: DrinkCategory, comperer: DrinkCategory): boolean {
		return compared && comperer ? compared.value === comperer.value : compared === comperer;
	}

}
