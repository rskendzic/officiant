import { RouterEffects } from './router.effect';
import { AuthEffects } from './auth.effects';
import { NotificationEffects } from './notification.effect';

export const effects: any[] = [RouterEffects, AuthEffects, NotificationEffects];

export * from './router.effect';
export * from './auth.effects';
export * from './notification.effect';
