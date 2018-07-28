import { HeaderComponent } from './header/header.component';
import * as fromDialogs from './dialogs';
import { MenuItemCardComponent } from './menu-item-card/menu-item-card.component';


export const components: any[] = [
  ...fromDialogs.dialogs,
  MenuItemCardComponent,
  HeaderComponent
];

export * from './dialogs';
export * from './menu-item-card/menu-item-card.component';
export * from './header/header.component';