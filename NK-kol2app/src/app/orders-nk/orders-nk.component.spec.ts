import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersNKComponent } from './orders-nk.component';

describe('OrdersNKComponent', () => {
  let component: OrdersNKComponent;
  let fixture: ComponentFixture<OrdersNKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersNKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersNKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
