import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTransactionsComponent } from './home-transactions.component';

describe('HomeTransactionsComponent', () => {
  let component: HomeTransactionsComponent;
  let fixture: ComponentFixture<HomeTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
