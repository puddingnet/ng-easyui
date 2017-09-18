import { NeLayoutModule } from './ne-layout.module';

describe('NeLayoutModule', () => {
  let neLayoutModule: NeLayoutModule;

  beforeEach(() => {
    neLayoutModule = new NeLayoutModule();
  });

  it('should create an instance', () => {
    expect(neLayoutModule).toBeTruthy();
  });
});
