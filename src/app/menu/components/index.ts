import * as fromDialogs from './dialogs';
import { MenuItemCardComponent } from './menu-item-card/menu-item-card.component';

export const components: any[] = [...fromDialogs.dialogs, MenuItemCardComponent];

export * from './dialogs';
export * from './menu-item-card/menu-item-card.component';
