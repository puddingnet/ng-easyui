import { NgEasyuiModule } from './ng-easyui.module';

describe('NgEasyuiModule', () => {
  let ngEasyuiModule: NgEasyuiModule;

  beforeEach(() => {
    ngEasyuiModule = new NgEasyuiModule();
  });

  it('should create an instance', () => {
    expect(ngEasyuiModule).toBeTruthy();
  });
});
