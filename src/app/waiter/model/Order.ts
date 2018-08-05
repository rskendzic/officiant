import { MenuItem } from '../../menu/models/MenuItem';

export interface Order {
	order: MenuItem[],
	id: number,
	prepared: boolean
}
