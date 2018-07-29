import {
	trigger, style, transition, animate, stagger, query
} from '@angular/animations';

export const SlideInOutAnimation = [
	trigger('slideInOut', [
		transition(':enter', [
			style({ transform: 'translateX(-50%)', opacity: 0 }),
			animate('1000ms ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
		]),
		transition(':leave', [
			animate('200ms ease-in-out', style({ transform: 'translateX(-50%)', opacity: 0 }))
		])
	],
	),
	trigger('slideOutIn', [
		transition(':enter', [
			style({ transform: 'translateX(50%)', opacity: 0 }),
			animate('1000ms ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
		]),
		transition(':leave', [
			animate('200ms ease-in-out', style({ transform: 'translateX(50%)', opacity: 0 }))
		])
	],
	)
]
