import { MenuItem } from '../../models/MenuItem';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrls: ['./menu-item-card.component.scss']
})
export class MenuItemCardComponent implements OnInit {

  @Input() drink: MenuItem
  @Output() onUpdate = new EventEmitter<MenuItem>()
  @Output() onDelete = new EventEmitter<MenuItem>()

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
