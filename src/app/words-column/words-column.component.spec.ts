import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsColumnComponent } from './words-column.component';

describe('WordsColumnComponent', () => {
  let component: WordsColumnComponent;
  let fixture: ComponentFixture<WordsColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
