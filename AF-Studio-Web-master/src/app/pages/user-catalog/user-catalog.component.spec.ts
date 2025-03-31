import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCatalogComponent } from './user-catalog.component';

describe('UserCatalogComponent', () => {
  let component: UserCatalogComponent;
  let fixture: ComponentFixture<UserCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
