import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfrenderComponent } from './ifrender.component';

describe('IfrenderComponent', () => {
  let component: IfrenderComponent;
  let fixture: ComponentFixture<IfrenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfrenderComponent]
    });
    fixture = TestBed.createComponent(IfrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
