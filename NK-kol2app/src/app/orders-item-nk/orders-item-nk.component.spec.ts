import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemNKComponent } from './orders-item-nk.component';

describe('OrdersItemNKComponent', () => {
  let component: OrdersItemNKComponent;
  let fixture: ComponentFixture<OrdersItemNKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemNKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemNKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
