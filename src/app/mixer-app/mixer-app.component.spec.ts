import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixerAppComponent } from './mixer-app.component';

describe('MixerAppComponent', () => {
  let component: MixerAppComponent;
  let fixture: ComponentFixture<MixerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
