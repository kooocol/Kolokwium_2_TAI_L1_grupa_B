import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsNKComponent } from './orders-details-nk.component';

describe('OrdersDetailsNKComponent', () => {
  let component: OrdersDetailsNKComponent;
  let fixture: ComponentFixture<OrdersDetailsNKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsNKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsNKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
