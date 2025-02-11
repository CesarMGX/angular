import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPartidaPage } from './edit-partida.page';

describe('EditPartidaPage', () => {
  let component: EditPartidaPage;
  let fixture: ComponentFixture<EditPartidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPartidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
