import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatingPage } from './floating.page';

describe('FloatingPage', () => {
  let component: FloatingPage;
  let fixture: ComponentFixture<FloatingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
