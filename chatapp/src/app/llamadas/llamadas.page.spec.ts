import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlamadasPage } from './llamadas.page';

describe('LlamadasPage', () => {
  let component: LlamadasPage;
  let fixture: ComponentFixture<LlamadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LlamadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
