import { style, transition, animate, trigger } from '@angular/animations';

export const transition015 = trigger('inOutAnimation0.15', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.15s ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0.15s ease-in', style({ opacity: 0 })),
  ]),
]);

export const transition020 = trigger('inOutAnimation0.2', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.2s ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0.2s ease-in', style({ opacity: 0 })),
  ]),
]);
