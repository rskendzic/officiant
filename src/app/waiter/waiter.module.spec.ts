import { WaiterModule } from './waiter.module';

describe('WaiterModule', () => {
  let waiterModule: WaiterModule;

  beforeEach(() => {
    waiterModule = new WaiterModule();
  });

  it('should create an instance', () => {
    expect(waiterModule).toBeTruthy();
  });
});
