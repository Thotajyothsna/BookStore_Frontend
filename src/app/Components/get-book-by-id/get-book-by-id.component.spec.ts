import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookByIdComponent } from './get-book-by-id.component';

describe('GetBookByIdComponent', () => {
  let component: GetBookByIdComponent;
  let fixture: ComponentFixture<GetBookByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetBookByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBookByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
