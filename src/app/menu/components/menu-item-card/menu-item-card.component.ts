import { Drink } from '../../models/Drink';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrls: ['./menu-item-card.component.scss']
})
export class MenuItemCardComponent implements OnInit {

  @Input() drink: Drink
  @Output() onUpdate = new EventEmitter<Drink>()
  @Output() onDelete = new EventEmitter<Drink>()

  constructor() { }

  ngOnInit() {
  }

  updateDrink(){
    this.onUpdate.emit()
  }

  deleteDrink(){
    this.onDelete.emit()
  }


}
